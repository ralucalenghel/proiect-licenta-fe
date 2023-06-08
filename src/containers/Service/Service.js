import React from "react";
import { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../../store/actions/index";
import CurentService from "../../components/Service/Service";
import "./Service.scss";
import Cars from "../../components/Car/Cars";

class Service extends Component {
  componentDidMount() {
    this.props.onSelectService(localStorage.getItem("serviceId"));
  }

  render() {
    const service = this.props.service ? (
      <CurentService
        id={this.props.service.id}
        name={this.props.service.name}
        noCars={this.props.service.noCars}
        maxCapacity={this.props.service.maxCapacity}
      />
    ) : null;

    const carList = this.props.service ? (
      <Cars
        serviceId={this.props.service.id}
        carList={this.props.service.cars}
      />
    ) : null;

    return (
      <div className="Service">
        {service}
        {carList}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    service: state.service.service,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSelectService: (id) => dispatch(actions.selectService(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Service);
