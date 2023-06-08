import React, { Component } from "react";
import { Button, Col } from "react-bootstrap";

class Operation extends Component {
  state = {
    toggle: this.props.exists,
  };

  componentDidMount() {
    if (this.props.exists) {
      this.props.addOperation(this.operationId);
    }
  }

  toggleRemove() {
    this.setState({ toggle: !this.state.toggle });
    this.props.removeOperation(this.props.operationId);
  }
  toggleAdd() {
    this.setState({ toggle: !this.state.toggle });
    this.props.addOperation(this.props.operationId);
  }
  render() {
    const buttons = this.state.toggle ? (
      <>
        <Col lg="1">
          <Button variant="outline-success" disabled>
            Add
          </Button>
        </Col>
        <Col lg="1">
          <Button variant="danger" onClick={() => this.toggleRemove()}>
            Remove
          </Button>
        </Col>
      </>
    ) : (
      <>
        <Col lg="1">
          <Button variant="success" onClick={() => this.toggleAdd()}>
            Add
          </Button>
        </Col>
        <Col lg="1">
          <Button variant="outline-danger" disabled>
            Remove
          </Button>
        </Col>
      </>
    );
    return (
      <>
        <Col lg="4">
          <>{this.props.description}</>
        </Col>
        <Col lg="4">{this.props.price}</Col>
        {buttons}
      </>
    );
  }
}

export default Operation;
