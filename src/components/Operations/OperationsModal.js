import axios from "axios";
import React, { Component } from "react";
import { Modal, Button, Container, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import { operationsUrl } from "../..";
import { updateObject } from "../../shared/utility";

import * as actions from "../../store/actions/index";
import Operation from "./Operation";

class OperationsModal extends Component {
  handleSubmit(id) {
    axios
      .put(operationsUrl + "log/" + id, this.props.operationList)
      .then((response) => {
        document.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  }
  checkOperation(operation, logs) {
    for (let x of Object.keys(logs)) {
      if (logs[x].description === operation.description) {
        return true;
      }
    }
    return false;
  }

  addOperation(id) {
    const updatedOperation = { [id]: this.state[id] + 1 };
    return updateObject(this.state, updatedOperation);
  }

  render() {
    const serviceLog =
      this.props.serviceLog != null
        ? {
            ...this.props.serviceLog.filter(
              (log) => log.carId === this.props.carId
            )[0],
          }
        : null;

    const serviceId = serviceLog ? serviceLog.id : null;

    const logs = serviceLog ? serviceLog.log : {};

    const operationGen = (operation) =>
      this.props.operations ? (
        <Operation
          operationId={operation.id}
          description={operation.description}
          price={operation.price}
          exists={this.checkOperation(operation, logs)}
          addOperation={() => this.props.onAddOperation(operation.id)}
          removeOperation={() => this.props.onRemoveOperation(operation.id)}
        />
      ) : null;
    const operations = this.props.operations
      ? this.props.operations.map((operation) => {
          return (
            <Row
              key={operation.id}
              className="mb-1"
              style={{ alignItems: "center" }}
            >
              {operationGen(operation)}
            </Row>
          );
        })
      : null;

    return (
      <Modal
        show={this.props.show}
        onHide={this.props.handleClose}
        carid={this.props.carId}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {this.props.carPlate}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row style={{ alignItems: "center" }}>
              <Col lg="4">
                <p>description</p>
              </Col>
              <Col lg="4">
                <p>price</p>
              </Col>
              <Col lg="1"></Col>
              <Col lg="1"></Col>
            </Row>
            <hr />
            {operations}
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <h4 className="me-auto">Total: {this.props.total} </h4>
          <Button onClick={() => this.handleSubmit(serviceId)}>Submit</Button>
          <Button variant="secondary" onClick={this.props.handleClose}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    operations: state.operations.operations,
    serviceLog: state.serviceLog.serviceLog,
    operationList: state.operationList.operationList,
    total: state.operationList.total,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onOptionsFetch: () => dispatch(actions.fetchOperations()),
    onServiceLogFetch: () => dispatch(actions.fetchServiceLog()),
    onAddOperation: (id) => dispatch(actions.addOperation(id)),
    onRemoveOperation: (id) => dispatch(actions.removeOperation(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OperationsModal);
