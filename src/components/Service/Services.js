import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../../store/actions/index";
import "./Services.scss";
import { Table } from "react-bootstrap";
import { withRouter } from "react-router";

class Services extends Component {
  routeChange = (path) => {
    this.props.history.push(path);
  };
  componentDidMount() {
    this.props.onFetchServices();
    if (localStorage.getItem("serviceId")) {
      this.props.onSelectService(localStorage.getItem("serviceId"));
    }
  }

  onServiceNameClicked = (id) => {
    localStorage.setItem("serviceId", id);
    this.setState(
      (prevState) => ({
        ...prevState,
      }),
      () => {
        this.props.onSelectService(id);
        this.routeChange("/service/" + id);
      }
    );
  };

  render() {
    const list = this.props.services.map((service) => {
      const noCars = (
        <span
          style={
            service.noCars < 8 ? { color: "#8bd962" } : { color: "#d92d1a" }
          }
        >
          {service.noCars}
        </span>
      );

      const serviceName = (
        <td
          className="serviceName"
          onClick={(id) => {
            this.onServiceNameClicked(service.id);
          }}
        >
          {service.name}
        </td>
      );

      return (
        <tr key={service.id} className="align-middle">
          {serviceName}
          <td className="center">
            {noCars}/{service.maxCapacity}
          </td>
          <td>
            {service.cars.map((x) => {
              return (
                <div key={x.id} className="List">
                  <div className="Attribute">{x.make}</div>
                  <div className="Attribute">{x.model}</div>
                  <div className="Attribute">{x.color}</div>
                </div>
              );
            })}
          </td>
        </tr>
      );
    });

    return (
      <div className="body">
        <Table striped bordered hover variant="dark">
          <thead>
            <tr className="align-middle">
              <th>Location</th>
              <th>Capacity</th>
              <th>Cars</th>
            </tr>
          </thead>
          <tbody>{list}</tbody>
        </Table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    services: state.services.services,
    service: state.service.service,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchServices: () => dispatch(actions.fetchServices()),
    onSelectService: (id) => dispatch(actions.selectService(id)),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Services)
);
