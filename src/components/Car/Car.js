import axios from "axios";
import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../../store/actions/index";
import { Card, Button, Col } from "react-bootstrap";
import { serviceUrl } from "../..";
import OperationsModal from "../Operations/OperationsModal";

class Car extends Component {
  state = {
    show: false,
  };

  componentDidMount() {
    this.props.onOptionsFetch();
    this.props.onServiceLogFetch();
  }

  setShow(value) {
    this.setState({ show: value });
  }

  render() {
    const handleDelete = () => {
      let answer = window.confirm("Delete " + this.props.car.plate + "?");
      if (answer) {
        axios.delete(
          serviceUrl +
            "service/" +
            this.props.serviceId +
            "?carId=" +
            this.props.car.id
        );
        document.location.reload();
      }
    };

    const handleShow = () => this.setShow(true);

    const handleClose = () => {
      this.props.onCloseOperations();
      this.setShow(false);
    };

    const modal = this.state.show ? (
      <>
        <OperationsModal
          show={this.state.show}
          handleClose={handleClose}
          operations={this.props.operations}
          serviceLog={this.props.serviceLog}
          carId={this.props.car.id}
          carPlate={this.props.car.plate}
        />
      </>
    ) : null;

    const carPlate = (plate) => {
      let carplate = String(plate);
      return carplate.toUpperCase();
    };
    const color = this.props.car.color;
    const carCard = (
      <Col>
        <Card
          id={this.props.car.id}
          bg="light"
          text="dark"
          border="dark"
          // className="w-25"
        >
          <Card.Header>{carPlate(this.props.car.plate)}</Card.Header>
          <Card.Img
            variant="top"
            // src=""
            height="100px"
            style={{ background: color }}
          />
          <Card.Body>
            <Card.Title>
              {this.props.car.make} {this.props.car.model}
            </Card.Title>
            <Card.Text>{color}</Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button
              onClick={() => handleShow()}
              variant="outline-success"
              className="me-3"
            >
              Operations
            </Button>
            <Button onClick={() => handleDelete()} variant="outline-danger">
              Delete
            </Button>
          </Card.Footer>
        </Card>
        {modal}
      </Col>
    );

    return <div style={{ padding: "1.5rem 4rem" }}>{carCard}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    operations: state.operations.operations,
    serviceLog: state.serviceLog.serviceLog,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onOptionsFetch: () => dispatch(actions.fetchOperations()),
    onServiceLogFetch: () => dispatch(actions.fetchServiceLog()),
    onCloseOperations: () => dispatch(actions.closeOperations()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Car);
