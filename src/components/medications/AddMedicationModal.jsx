import React from "react";
import { Modal, Form, Button, Row, Col } from "react-bootstrap";
import { FaPills } from "react-icons/fa";

const AddMedicationModal = ({
  show,
  onHide,
  newMedication,
  setNewMedication,
  handleAddMedication,
  loading,
}) => {
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>
          <FaPills className="me-2" />
          Add New Medication
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleAddMedication}>
          <Form.Group className="mb-3">
            <Form.Label>Medication Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="e.g. Amoxicillin"
              value={newMedication.name}
              onChange={(e) =>
                setNewMedication({ ...newMedication, name: e.target.value })
              }
              required
            />
          </Form.Group>

          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Dosage</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="e.g. 500mg"
                  value={newMedication.dosage}
                  onChange={(e) =>
                    setNewMedication({
                      ...newMedication,
                      dosage: e.target.value,
                    })
                  }
                  required
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Frequency</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="e.g. Twice daily"
                  value={newMedication.frequency}
                  onChange={(e) =>
                    setNewMedication({
                      ...newMedication,
                      frequency: e.target.value,
                    })
                  }
                  required
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Start Date</Form.Label>
                <Form.Control
                  type="date"
                  value={newMedication.startDate}
                  onChange={(e) =>
                    setNewMedication({
                      ...newMedication,
                      startDate: e.target.value,
                    })
                  }
                  required
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>End Date (optional)</Form.Label>
                <Form.Control
                  type="date"
                  value={newMedication.endDate}
                  onChange={(e) =>
                    setNewMedication({
                      ...newMedication,
                      endDate: e.target.value,
                    })
                  }
                />
              </Form.Group>
            </Col>
          </Row>

          <Form.Group className="mb-3">
            <Form.Label>Special Instructions</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="e.g. Take with food, avoid alcohol"
              value={newMedication.instructions}
              onChange={(e) =>
                setNewMedication({
                  ...newMedication,
                  instructions: e.target.value,
                })
              }
            />
          </Form.Group>
          <Button variant="secondary" onClick={onHide}>
            Cancel
          </Button>
          <Button
            style={{ float: "right" }}
            variant="primary"
            type="submit"
            disabled={loading}
          >
            {loading ? "Adding..." : "Add Medication"}
          </Button>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default AddMedicationModal;
