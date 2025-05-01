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
  Tab,
  Tabs,
} from "react-bootstrap";
import {
  FaChartLine,
  FaUserFriends,
  FaPills,
  FaCalendarAlt,
  FaBell,
  FaFileMedicalAlt,
  FaHeartbeat,
  FaNotesMedical,
  FaExclamationTriangle,
} from "react-icons/fa";
import { motion } from "framer-motion";
import "../styles/Dashboard.css";

function Dashboard() {
  const navigate = useNavigate();
  const { isAuthenticated, userId } = useSelector((state) => state.auth);
  const [activeTab, setActiveTab] = useState("overview");

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);

  // Sample data
  const stats = [
    {
      title: "Patients Today",
      value: "12",
      icon: <FaUserFriends />,
      color: "primary",
      progress: 60,
    },
    {
      title: "Appointments",
      value: "5",
      icon: <FaCalendarAlt />,
      color: "success",
      progress: 75,
    },
    {
      title: "Medications",
      value: "8",
      icon: <FaPills />,
      color: "warning",
      progress: 45,
    },
    {
      title: "Pending Tasks",
      value: "3",
      icon: <FaNotesMedical />,
      color: "danger",
      progress: 30,
    },
  ];

  const recentActivities = [
    {
      id: 1,
      action: "Completed patient checkup",
      time: "10:30 AM",
      status: "completed",
    },
    {
      id: 2,
      action: "Prescribed new medication",
      time: "11:45 AM",
      status: "completed",
    },
    {
      id: 3,
      action: "Upcoming appointment",
      time: "02:15 PM",
      status: "pending",
    },
    {
      id: 4,
      action: "Lab results received",
      time: "Yesterday",
      status: "completed",
    },
    {
      id: 5,
      action: "Patient consultation",
      time: "Yesterday",
      status: "completed",
    },
  ];

  const vitalStats = [
    { name: "Blood Pressure", value: "120/80", status: "normal" },
    { name: "Heart Rate", value: "72 bpm", status: "normal" },
    { name: "Temperature", value: "98.6°F", status: "normal" },
    { name: "Blood Sugar", value: "110 mg/dL", status: "warning" },
  ];

  return (
    <DashboardLayout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="dashboard-page"
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
                Dashboard Overview
              </motion.h1>
            </Col>
          </Row>

          {/* Stats Cards */}
          <Row className="mb-4 g-4">
            {stats.map((stat, index) => (
              <Col xl={3} lg={6} key={index}>
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Card className={`stat-card border-${stat.color} shadow-sm`}>
                    <Card.Body>
                      <div className="d-flex justify-content-between align-items-center mb-3">
                        <div>
                          <h6 className="text-uppercase text-muted mb-2">
                            {stat.title}
                          </h6>
                          <h2 className="mb-0">{stat.value}</h2>
                        </div>
                        <div
                          className={`icon-circle bg-${stat.color}-light text-${stat.color}`}
                        >
                          {stat.icon}
                        </div>
                      </div>
                      <ProgressBar
                        now={stat.progress}
                        variant={stat.color}
                        className="progress-sm"
                      />
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>

          {/* Main Content */}
          <Row className="g-4">
            {/* Left Column */}
            <Col lg={8}>
              <Card className="shadow-sm mb-4">
                <Card.Body>
                  <Tabs
                    activeKey={activeTab}
                    onSelect={(k) => setActiveTab(k)}
                    className="mb-3"
                  >
                    <Tab eventKey="overview" title="Overview">
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="dashboard-grid">
                          <div className="grid-item vital-stats">
                            <h5 className="mb-3">Vital Statistics</h5>
                            <ListGroup variant="flush">
                              {vitalStats.map((stat, index) => (
                                <ListGroup.Item
                                  key={index}
                                  className="d-flex justify-content-between align-items-center"
                                >
                                  <div>
                                    {stat.name}
                                    {stat.status === "warning" && (
                                      <FaExclamationTriangle className="ms-2 text-warning" />
                                    )}
                                  </div>
                                  <Badge
                                    bg={
                                      stat.status === "normal"
                                        ? "success"
                                        : "warning"
                                    }
                                    className="fs-6"
                                  >
                                    {stat.value}
                                  </Badge>
                                </ListGroup.Item>
                              ))}
                            </ListGroup>
                          </div>
                          <div className="grid-item quick-actions">
                            <h5 className="mb-3">Quick Actions</h5>
                            <div className="actions-grid">
                              <motion.div
                                className="action-item"
                                whileHover={{ scale: 1.05 }}
                              >
                                <Button
                                  variant="outline-primary"
                                  className="w-100"
                                >
                                  <FaFileMedicalAlt className="me-2" />
                                  New Prescription
                                </Button>
                              </motion.div>
                              <motion.div
                                className="action-item"
                                whileHover={{ scale: 1.05 }}
                              >
                                <Button
                                  variant="outline-success"
                                  className="w-100"
                                >
                                  <FaCalendarAlt className="me-2" />
                                  Schedule Appointment
                                </Button>
                              </motion.div>
                              <motion.div
                                className="action-item"
                                whileHover={{ scale: 1.05 }}
                              >
                                <Button
                                  variant="outline-warning"
                                  className="w-100"
                                >
                                  <FaNotesMedical className="me-2" />
                                  Add Patient Note
                                </Button>
                              </motion.div>
                              <motion.div
                                className="action-item"
                                whileHover={{ scale: 1.05 }}
                              >
                                <Button
                                  variant="outline-info"
                                  className="w-100"
                                >
                                  <FaHeartbeat className="me-2" />
                                  Record Vitals
                                </Button>
                              </motion.div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </Tab>
                    <Tab eventKey="reports" title="Reports">
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="text-center py-4">
                          <h5>Medical Reports</h5>
                          <p className="text-muted">
                            Reports analysis would appear here
                          </p>
                        </div>
                      </motion.div>
                    </Tab>
                  </Tabs>
                </Card.Body>
              </Card>
            </Col>

            {/* Right Column */}
            <Col lg={4}>
              <Card className="shadow-sm mb-4">
                <Card.Body>
                  <h5 className="mb-3">
                    <FaBell className="me-2" />
                    Recent Activities
                  </h5>
                  <ListGroup variant="flush">
                    {recentActivities.map((activity) => (
                      <motion.div key={activity.id} whileHover={{ x: 5 }}>
                        <ListGroup.Item className="d-flex justify-content-between align-items-start">
                          <div className="ms-2 me-auto">
                            <div className="fw-bold">{activity.action}</div>
                            <small className="text-muted">
                              {activity.time}
                            </small>
                          </div>
                          <Badge
                            bg={
                              activity.status === "completed"
                                ? "success"
                                : "warning"
                            }
                          >
                            {activity.status}
                          </Badge>
                        </ListGroup.Item>
                      </motion.div>
                    ))}
                  </ListGroup>
                </Card.Body>
              </Card>

              <Card className="shadow-sm">
                <Card.Body>
                  <h5 className="mb-3">
                    <FaExclamationTriangle className="me-2 text-warning" />
                    Important Alerts
                  </h5>
                  <div className="alert-item">
                    <div className="alert-content">
                      <strong>Medication Refill</strong>
                      <p className="mb-0">Patient: John Smith - Amoxicillin</p>
                    </div>
                    <Button variant="outline-warning" size="sm">
                      Review
                    </Button>
                  </div>
                  <div className="alert-item">
                    <div className="alert-content">
                      <strong>Lab Results</strong>
                      <p className="mb-0">New results available for review</p>
                    </div>
                    <Button variant="outline-info" size="sm">
                      View
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </motion.div>
    </DashboardLayout>
  );
}

export default Dashboard;
