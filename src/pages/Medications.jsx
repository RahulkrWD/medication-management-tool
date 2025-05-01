import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "../components/dashboard/DashboardLayout";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Table,
  Form,
  Modal,
  Badge,
  InputGroup,
  Dropdown,
} from "react-bootstrap";
import {
  FaPills,
  FaPlus,
  FaSearch,
  FaFilter,
  FaCalendarAlt,
  FaTimes,
  FaCheck,
  FaExclamationTriangle,
  FaHistory,
  FaRegClock,
} from "react-icons/fa";
import { motion } from "framer-motion";
import "../styles/Medications.css";

function Medications() {
  const navigate = useNavigate();
  const { isAuthenticated, userId } = useSelector((state) => state.auth);
  const [showAddModal, setShowAddModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("all");
  const [newMedication, setNewMedication] = useState({
    name: "",
    dosage: "",
    frequency: "",
    startDate: "",
    endDate: "",
    instructions: "",
    status: "active",
  });

  // Sample medication data
  const [medications, setMedications] = useState([
    {
      id: 1,
      name: "Amoxicillin",
      dosage: "500mg",
      frequency: "Twice daily",
      startDate: "2023-05-15",
      endDate: "2023-06-15",
      instructions: "Take with food",
      status: "active",
      lastTaken: "2023-06-10 08:30",
    },
    {
      id: 2,
      name: "Lisinopril",
      dosage: "10mg",
      frequency: "Once daily",
      startDate: "2023-01-10",
      endDate: "",
      instructions: "Take in the morning",
      status: "active",
      lastTaken: "2023-06-10 07:15",
    },
    {
      id: 3,
      name: "Ibuprofen",
      dosage: "200mg",
      frequency: "As needed",
      startDate: "2023-03-20",
      endDate: "",
      instructions: "Take with water",
      status: "active",
      lastTaken: "2023-06-09 14:45",
    },
    {
      id: 4,
      name: "Metformin",
      dosage: "850mg",
      frequency: "Twice daily with meals",
      startDate: "2022-11-05",
      endDate: "2023-05-05",
      instructions: "Monitor blood sugar levels",
      status: "completed",
      lastTaken: "2023-05-05 19:00",
    },
  ]);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);

  const handleAddMedication = () => {
    const newMed = {
      ...newMedication,
      id: medications.length + 1,
      lastTaken: new Date().toISOString(),
    };
    setMedications([...medications, newMed]);
    setShowAddModal(false);
    setNewMedication({
      name: "",
      dosage: "",
      frequency: "",
      startDate: "",
      endDate: "",
      instructions: "",
      status: "active",
    });
  };

  const filteredMedications = medications.filter((med) => {
    // Filter by search term
    const matchesSearch =
      med.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      med.dosage.toLowerCase().includes(searchTerm.toLowerCase());

    // Filter by status
    const matchesFilter = filter === "all" || med.status === filter;

    return matchesSearch && matchesFilter;
  });

  const getStatusBadge = (status) => {
    switch (status) {
      case "active":
        return <Badge bg="success">Active</Badge>;
      case "completed":
        return <Badge bg="primary">Completed</Badge>;
      case "missed":
        return <Badge bg="warning">Missed</Badge>;
      case "expired":
        return <Badge bg="danger">Expired</Badge>;
      default:
        return <Badge bg="secondary">Unknown</Badge>;
    }
  };

  const handleTakeMedication = (id) => {
    setMedications(
      medications.map((med) =>
        med.id === id ? { ...med, lastTaken: new Date().toISOString() } : med
      )
    );
  };

  return (
    <DashboardLayout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="medications-page"
      >
        <Container fluid>
          {/* Header Section */}
          <Row className="mb-4 align-items-center">
            <Col md={6}>
              <motion.h1
                className="page-title"
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <FaPills className="me-2" />
                My Medications
              </motion.h1>
            </Col>
            <Col md={6} className="d-flex justify-content-end">
              <motion.div whileHover={{ scale: 1.05 }}>
                <Button
                  variant="primary"
                  className="me-2"
                  onClick={() => setShowAddModal(true)}
                >
                  <FaPlus className="me-1" />
                  Add Medication
                </Button>
              </motion.div>
              <Dropdown>
                <Dropdown.Toggle variant="outline-secondary">
                  <FaFilter className="me-1" />
                  Filter
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item onClick={() => setFilter("all")}>
                    All Medications
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => setFilter("active")}>
                    Active
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => setFilter("completed")}>
                    Completed
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => setFilter("missed")}>
                    Missed
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => setFilter("expired")}>
                    Expired
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
          </Row>

          {/* Search Bar */}
          <Row className="mb-4">
            <Col>
              <InputGroup>
                <InputGroup.Text>
                  <FaSearch />
                </InputGroup.Text>
                <Form.Control
                  placeholder="Search medications..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </InputGroup>
            </Col>
          </Row>

          {/* Medications Grid */}
          <Row>
            <Col>
              <Card className="shadow-sm">
                <Card.Body>
                  {filteredMedications.length === 0 ? (
                    <div className="text-center py-4 text-muted">
                      No medications found
                    </div>
                  ) : (
                    <div className="medications-grid">
                      {filteredMedications.map((medication) => (
                        <motion.div
                          key={medication.id}
                          className="medication-card"
                          whileHover={{ y: -5 }}
                          transition={{ duration: 0.2 }}
                        >
                          <div className="medication-header">
                            <div className="medication-name">
                              <FaPills className="me-2" />
                              <h5>{medication.name}</h5>
                            </div>
                            <div className="medication-status">
                              {getStatusBadge(medication.status)}
                            </div>
                          </div>

                          <div className="medication-details">
                            <div className="detail-row">
                              <span className="detail-label">Dosage:</span>
                              <span>{medication.dosage}</span>
                            </div>
                            <div className="detail-row">
                              <span className="detail-label">Frequency:</span>
                              <span>{medication.frequency}</span>
                            </div>
                            <div className="detail-row">
                              <span className="detail-label">
                                Instructions:
                              </span>
                              <span>{medication.instructions}</span>
                            </div>
                            <div className="detail-row">
                              <span className="detail-label">Period:</span>
                              <span>
                                {medication.startDate}
                                {medication.endDate &&
                                  ` to ${medication.endDate}`}
                              </span>
                            </div>
                            {medication.lastTaken && (
                              <div className="detail-row">
                                <span className="detail-label">
                                  Last Taken:
                                </span>
                                <span>
                                  <FaRegClock className="me-1" />
                                  {medication.lastTaken}
                                </span>
                              </div>
                            )}
                          </div>

                          <div className="medication-actions">
                            {medication.status === "active" && (
                              <motion.div whileHover={{ scale: 1.05 }}>
                                <Button
                                  variant="outline-success"
                                  size="sm"
                                  onClick={() =>
                                    handleTakeMedication(medication.id)
                                  }
                                >
                                  <FaCheck className="me-1" />
                                  Mark as Taken
                                </Button>
                              </motion.div>
                            )}
                            <motion.div whileHover={{ scale: 1.05 }}>
                              <Button variant="outline-primary" size="sm">
                                Details
                              </Button>
                            </motion.div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  )}
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>

        {/* Add Medication Modal */}
        <Modal show={showAddModal} onHide={() => setShowAddModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>
              <FaPills className="me-2" />
              Add New Medication
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Medication Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="e.g. Amoxicillin"
                  value={newMedication.name}
                  onChange={(e) =>
                    setNewMedication({ ...newMedication, name: e.target.value })
                  }
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
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowAddModal(false)}>
              Cancel
            </Button>
            <Button variant="primary" onClick={handleAddMedication}>
              Add Medication
            </Button>
          </Modal.Footer>
        </Modal>
      </motion.div>
    </DashboardLayout>
  );
}

export default Medications;
