import React, { Component } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { connect } from "react-redux";

import "./Toolbar.scss";

class toolbar extends Component {
  render() {
    const customHref =
      this.props.service != null ? "/service/" + this.props.service.id : "";
    return (
      <Nav className="Toolbar">
        <Navbar.Brand className="text-light p-2">ServiceApp</Navbar.Brand>
        <Nav
          variant="pills"
          defaultActiveKey="/"
          className="justify-content-end"
        >
          <Nav.Item>
            <Nav.Link href="/">Dashboard</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            {this.props.service != null &&
            !window.location.toString().includes("service") ? (
              <Nav.Link href={customHref}>Last Service</Nav.Link>
            ) : (
              <Nav.Link href="disabled" disabled>
                Last Service
              </Nav.Link>
            )}
          </Nav.Item>
        </Nav>
      </Nav>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    service: state.service.service,
  };
};

export default connect(mapStateToProps)(toolbar);
