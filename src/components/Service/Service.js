import axios from "axios";
import React, { Component } from "react";

import { Card, Button } from "react-bootstrap";
import { toast } from "react-toastify";
import { operationsUrl, serviceUrl } from "../..";
import CarModal from "../Car/CarModal";

class CurentService extends Component {
  state = {
    show: false,
    loaded: false,
  };

  componentDidMount() {
    this.setState({ loaded: true });
  }

  render() {
    const handleClose = () => this.setState({ show: false });
    const handleShow = () => this.setState({ show: true });
    const handleSubmit = (car) => {
      axios
        .post(serviceUrl + "service/" + this.props.id, car)
        .then((response) => {
          console.log(response.data);
          const newCarId = response.data.id;
          axios.post(operationsUrl + "log/car/" + newCarId);
          document.location.reload();
        })
        .catch((error) => {
          console.log(error);
        });
    };
    const modal = (
      <>
        <CarModal
          show={this.state.show}
          handleClose={handleClose}
          handleSubmit={(car) => handleSubmit(car)}
          name={this.props.name}
          id={this.props.id}
        />
      </>
    );

    const maxCap = this.props.maxCapacity;
    const noCars = this.props.noCars;
    const capacity = () => {
      if (noCars < 0.3 * maxCap) {
        return "green";
      } else if (noCars < 0.6 * maxCap) {
        return "black";
      } else {
        return "red";
      }
    };
    let color = capacity();
    let addCar =
      this.props.noCars >= this.props.maxCapacity ? (
        <>
          <Button variant="outline-success" onClick={() => {}} disabled>
            Add Car
          </Button>
        </>
      ) : (
        <Button variant="outline-success" onClick={handleShow}>
          Add Car
        </Button>
      );

    return (
      <Card>
        <Card.Body>
          Service {this.props.name} {this.props.id}{" "}
          <span className="ms-3" style={{ color: color }}>
            {this.props.noCars}
          </span>
          /{this.props.maxCapacity}
        </Card.Body>
        <Card.Footer>{addCar}</Card.Footer>
        {modal}
      </Card>
    );
  }
}

export default CurentService;
