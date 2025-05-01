import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "../components/dashboard/DashboardLayout";
import {
  Container,
  Row,
  Col,
  Card,
  ProgressBar,
  Button,
  Badge,
  ListGroup,
  Alert,
} from "react-bootstrap";
import {
  FaPills,
  FaBell,
  FaCalendarAlt,
  FaHistory,
  FaHeartbeat,
  FaExclamationTriangle,
  FaPlus,
  FaChartLine,
} from "react-icons/fa";
import { motion } from "framer-motion";
import "../styles/Dashboard.css";

function Dashboard() {
  const navigate = useNavigate();
  const { isAuthenticated, userId } = useSelector((state) => state.auth);
  const [medications, setMedications] = useState([]);
  const [upcomingAppointments, setUpcomingAppointments] = useState([]);
  const [healthStats, setHealthStats] = useState({});

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    } else {
      // Simulate fetching data
      fetchPatientData();
    }
  }, [isAuthenticated, navigate]);

  const fetchPatientData = () => {
    // Mock data - in a real app, this would come from an API
    setMedications([
      {
        id: 1,
        name: "Amoxicillin",
        dosage: "500mg",
        frequency: "Twice daily",
        nextDose: "Today, 8:00 PM",
        progress: 75,
        status: "active",
      },
      {
        id: 2,
        name: "Lisinopril",
        dosage: "10mg",
        frequency: "Once daily",
        nextDose: "Tomorrow, 7:00 AM",
        progress: 100,
        status: "active",
      },
      {
        id: 3,
        name: "Ibuprofen",
        dosage: "200mg",
        frequency: "As needed",
        nextDose: "As required",
        progress: 30,
        status: "active",
      },
    ]);

    setUpcomingAppointments([
      {
        id: 1,
        date: "2023-06-15",
        time: "10:30 AM",
        doctor: "Dr. Smith",
        purpose: "Follow-up",
      },
      {
        id: 2,
        date: "2023-07-01",
        time: "02:15 PM",
        doctor: "Dr. Johnson",
        purpose: "Annual Checkup",
      },
    ]);

    setHealthStats({
      bloodPressure: "120/80",
      heartRate: "72 bpm",
      bloodSugar: "110 mg/dL",
      lastUpdated: "Today, 9:15 AM",
    });
  };

  const handleTakeMedication = (id) => {
    setMedications(
      medications.map((med) =>
        med.id === id ? { ...med, progress: 100 } : med
      )
    );
  };

  const getMedicationStatus = (progress) => {
    if (progress === 100) return "Taken";
    if (progress > 75) return "Almost due";
    if (progress > 50) return "Pending";
    return "Upcoming";
  };

  return (
    <DashboardLayout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="patient-dashboard"
      >
        <Container fluid>
          {/* Header Section */}
          <Row className="mb-4">
            <Col>
              <motion.h1
                className="page-title"
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <FaChartLine className="me-2" />
                My Health Dashboard
              </motion.h1>
            </Col>
          </Row>

          {/* Alerts Section */}
          <Row className="mb-4">
            <Col>
              <Alert variant="warning" className="d-flex align-items-center">
                <FaExclamationTriangle className="me-2" />
                <div>
                  <strong>Medication Reminder:</strong> Your Amoxicillin dose is
                  due at 8:00 PM
                </div>
              </Alert>
            </Col>
          </Row>

          {/* Main Content */}
          <Row className="g-4">
            {/* Medications Column */}
            <Col lg={6}>
              <Card className="shadow-sm h-100">
                <Card.Body>
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <h5>
                      <FaPills className="me-2" />
                      My Medications
                    </h5>
                    <Button variant="outline-primary" size="sm">
                      <FaPlus className="me-1" />
                      Add Medication
                    </Button>
                  </div>

                  {medications.length === 0 ? (
                    <div className="text-center py-4 text-muted">
                      No medications found
                    </div>
                  ) : (
                    <div className="medications-list">
                      {medications.map((medication) => (
                        <motion.div
                          key={medication.id}
                          className="medication-item"
                          whileHover={{ y: -2 }}
                        >
                          <div className="medication-header">
                            <div>
                              <h6>{medication.name}</h6>
                              <small className="text-muted">
                                {medication.dosage} • {medication.frequency}
                              </small>
                            </div>
                            <Badge
                              bg={
                                medication.progress === 100
                                  ? "success"
                                  : "warning"
                              }
                            >
                              {getMedicationStatus(medication.progress)}
                            </Badge>
                          </div>

                          <div className="medication-details">
                            <div className="d-flex justify-content-between mb-2">
                              <span>Next dose:</span>
                              <strong>{medication.nextDose}</strong>
                            </div>
                            <ProgressBar
                              now={medication.progress}
                              variant={
                                medication.progress === 100
                                  ? "success"
                                  : "primary"
                              }
                              className="mb-2"
                            />
                          </div>

                          <div className="medication-actions">
                            {medication.progress < 100 && (
                              <Button
                                variant="outline-success"
                                size="sm"
                                onClick={() =>
                                  handleTakeMedication(medication.id)
                                }
                              >
                                Mark as Taken
                              </Button>
                            )}
                            <Button variant="outline-primary" size="sm">
                              Details
                            </Button>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  )}
                </Card.Body>
              </Card>
            </Col>

            {/* Right Column - Appointments and Health Stats */}
            <Col lg={6}>
              <Row className="g-4">
                {/* Appointments */}
                <Col md={12}>
                  <Card className="shadow-sm">
                    <Card.Body>
                      <h5 className="mb-3">
                        <FaCalendarAlt className="me-2" />
                        Upcoming Appointments
                      </h5>
                      {upcomingAppointments.length === 0 ? (
                        <div className="text-center py-2 text-muted">
                          No upcoming appointments
                        </div>
                      ) : (
                        <ListGroup variant="flush">
                          {upcomingAppointments.map((appointment) => (
                            <ListGroup.Item key={appointment.id}>
                              <div className="d-flex justify-content-between">
                                <div>
                                  <h6 className="mb-1">{appointment.doctor}</h6>
                                  <small className="text-muted">
                                    {appointment.purpose}
                                  </small>
                                </div>
                                <div className="text-end">
                                  <div>{appointment.date}</div>
                                  <small className="text-muted">
                                    {appointment.time}
                                  </small>
                                </div>
                              </div>
                            </ListGroup.Item>
                          ))}
                        </ListGroup>
                      )}
                    </Card.Body>
                  </Card>
                </Col>

                {/* Health Stats */}
                <Col md={12}>
                  <Card className="shadow-sm">
                    <Card.Body>
                      <h5 className="mb-3">
                        <FaHeartbeat className="me-2" />
                        Health Statistics
                      </h5>
                      <div className="health-stats-grid">
                        <div className="stat-item">
                          <div className="stat-label">Blood Pressure</div>
                          <div className="stat-value">
                            {healthStats.bloodPressure}
                          </div>
                          <Badge bg="success">Normal</Badge>
                        </div>
                        <div className="stat-item">
                          <div className="stat-label">Heart Rate</div>
                          <div className="stat-value">
                            {healthStats.heartRate}
                          </div>
                          <Badge bg="success">Normal</Badge>
                        </div>
                        <div className="stat-item">
                          <div className="stat-label">Blood Sugar</div>
                          <div className="stat-value">
                            {healthStats.bloodSugar}
                          </div>
                          <Badge bg="warning">Slightly High</Badge>
                        </div>
                      </div>
                      <div className="text-muted mt-2">
                        Last updated: {healthStats.lastUpdated}
                      </div>
                    </Card.Body>
                  </Card>
                </Col>

                {/* Medication History */}
                <Col md={12}>
                  <Card className="shadow-sm">
                    <Card.Body>
                      <h5 className="mb-3">
                        <FaHistory className="me-2" />
                        Medication History
                      </h5>
                      <div className="text-center py-2">
                        <Button variant="outline-secondary">
                          View Full History
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </motion.div>
    </DashboardLayout>
  );
}

export default Dashboard;
