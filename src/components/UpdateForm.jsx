import React, { Component } from "react";
import { Button, Form, Modal } from "react-bootstrap";

class UpdateForm extends Component {
  render() {
    const { show, handleClose , handleSubmite , handleChangeDrinkName , handleChangeDrinkImg } = this.props;
    return (
      <div>
        <>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form onSubmit={handleSubmite}>
                <Form.Group className="mb-3">
                  <Form.Label>Drink name</Form.Label>
                  <Form.Control onChange={handleChangeDrinkName} placeholder="Enter drink name" />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Drink img</Form.Label>
                  <Form.Control onChange={handleChangeDrinkImg} placeholder="Enter drink img" />
                </Form.Group>
                <Button className="m-2" variant="outline-secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="outline-primary" type="submite">
                Save Changes
              </Button>
              </Form>
            </Modal.Body>
          </Modal>
        </>
      </div>
    );
  }
}

export default UpdateForm;
