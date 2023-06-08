import React, { Component } from "react";
import { Form, Modal, Button } from "react-bootstrap";
import { updateObject } from "../../shared/utility";

class CarModal extends Component {
  state = {
    fields: {
      make: "",
      model: "",
      color: "",
      yearOfFabrication: 2000,
      plate: "",
    },
    valid: {
      validMake: false,
      validModel: false,
      validColor: false,
      validYear: true,
      validPlate: false,
    },
    formValidity: false,
  };

  onMakeChange(e) {
    const updatedField = updateObject(this.state.fields, {
      make: e.target.value,
    });
    this.setState({ fields: updatedField }, () => {
      let updatedValid;
      if (this.state.fields.make.length < 1) {
        updatedValid = updateObject(this.state.valid, {
          validMake: false,
        });
      } else {
        updatedValid = updateObject(this.state.valid, {
          validMake: true,
        });
      }
      this.setState({ valid: updatedValid });
      this.checkValidity();
    });
  }

  onModelChange(e) {
    const updatedField = updateObject(this.state.fields, {
      model: e.target.value,
    });
    this.setState({ fields: updatedField }, () => {
      let updatedValid;
      if (this.state.fields.model.length < 1) {
        updatedValid = updateObject(this.state.valid, {
          validModel: false,
        });
      } else {
        updatedValid = updateObject(this.state.valid, {
          validModel: true,
        });
      }
      this.setState({ valid: updatedValid });
      this.checkValidity();
    });
  }

  onColorChange(e) {
    const updatedField = updateObject(this.state.fields, {
      color: e.target.value,
    });
    this.setState({ fields: updatedField }, () => {
      let updatedValid;
      if (this.state.fields.color.length < 1) {
        updatedValid = updateObject(this.state.valid, {
          validColor: false,
        });
      } else {
        updatedValid = updateObject(this.state.valid, {
          validColor: true,
        });
      }
      this.setState({ valid: updatedValid });
      this.checkValidity();
    });
  }

  onYearChange(e) {
    const updatedField = updateObject(this.state.fields, {
      yearOfFabrication: e.target.value,
    });
    this.setState({ fields: updatedField }, () => {
      let updatedValid;
      if (this.state.fields.yearOfFabrication < 1950) {
        updatedValid = updateObject(this.state.valid, {
          validYear: false,
        });
      } else {
        updatedValid = updateObject(this.state.valid, {
          validYear: true,
        });
      }
      this.setState({ valid: updatedValid });
      this.checkValidity();
    });
  }

  onPlateChange(e) {
    const updatedField = updateObject(this.state.fields, {
      plate: e.target.value,
    });
    this.setState({ fields: updatedField }, () => {
      let updatedValid;
      if (this.state.fields.plate.length < 1) {
        updatedValid = updateObject(this.state.valid, {
          validPlate: false,
        });
      } else {
        updatedValid = updateObject(this.state.valid, {
          validPlate: true,
        });
      }
      this.setState({ valid: updatedValid }, () => {
        this.checkValidity();
      });
    });
  }

  checkValidity() {
    if (
      this.state.valid.validMake &&
      this.state.valid.validModel &&
      this.state.valid.validColor &&
      this.state.valid.validYear &&
      this.state.valid.validPlate
    ) {
      this.setState({ formValidity: true });
    } else {
      this.setState({ formValidity: false });
    }
  }

  render() {
    return (
      <Modal show={this.props.show} onHide={this.props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            Add car to service {this.props.name} {this.props.id}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form
            validated={!this.state.formValidity}
            onSubmit={this.handleSubmit}
          >
            <Form.Floating className="mb-3">
              <Form.Control
                required
                id="make"
                type="text"
                placeholder="make"
                className="text-capitalize"
                value={this.state.fields.make}
                onChange={(e) => this.onMakeChange(e)}
              />
              <label htmlFor="make">Make</label>
            </Form.Floating>
            <Form.Floating className="mb-3">
              <Form.Control
                required
                id="model"
                type="text"
                placeholder="model"
                className="text-capitalize"
                value={this.state.fields.model}
                onChange={(e) => this.onModelChange(e)}
              />
              <label htmlFor="model">Model</label>
            </Form.Floating>
            <Form.Floating className="mb-3">
              <Form.Control
                required
                id="color"
                type="text"
                placeholder="color"
                className="text-capitalize"
                value={this.state.fields.color}
                onChange={(e) => this.onColorChange(e)}
              />
              <label htmlFor="color">Color</label>
            </Form.Floating>
            <Form.Floating className="mb-3">
              <Form.Control
                required
                id="year"
                type="number"
                placeholder="year"
                value={this.state.fields.yearOfFabrication}
                onChange={(e) => this.onYearChange(e)}
              />
              <label htmlFor="year">Year of fabrication</label>
            </Form.Floating>
            <Form.Floating className="mb-3">
              <Form.Control
                required
                id="plate"
                type="text"
                placeholder="plate number"
                className="text-uppercase"
                value={this.state.fields.plate}
                onChange={(e) => this.onPlateChange(e)}
              />
              <label htmlFor="plate">Plate</label>
            </Form.Floating>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            onClick={() =>
              console.log(this.state.formValidity, this.state.valid)
            }
          >
            valid?
          </Button>
          <Button
            variant="primary"
            disabled={this.state.formValidity ? false : true}
            onClick={() => this.props.handleSubmit(this.state.fields)}
          >
            Add Car
          </Button>
          <Button variant="secondary" onClick={this.props.handleClose}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default CarModal;
