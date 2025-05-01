import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import DashboardLayout from "../components/dashboard/DashboardLayout";
import { profile } from "../redux/AuthSlice";
import { Container, Row, Col, Card, Tab, Tabs } from "react-bootstrap";
import "../styles/Profile.css";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaUserShield,
  FaHeartbeat,
  FaPills,
  FaNotesMedical,
} from "react-icons/fa";
import { motion } from "framer-motion";

function Profile() {
  const navigate = useNavigate();
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);

  useEffect(() => {
    dispatch(profile(id));
  }, [dispatch, id]);

  const userData = {
    name: "Dr. Sarah Johnson",
    email: "sarah.johnson@example.com",
    phone: "+1 (555) 123-4567",
    address: "123 Medical Center Dr, Boston, MA 02115",
    dob: "March 15, 1985",
    specialty: "Cardiology",
    yearsExperience: 12,
    bio: "Board-certified cardiologist with extensive experience in non-invasive cardiology and preventive care. Passionate about patient education and heart health awareness.",
  };

  const stats = [
    {
      title: "Patients Treated",
      value: "1,240",
      icon: <FaUser className="stat-icon" />,
      color: "primary",
    },
    {
      title: "Successful Procedures",
      value: "892",
      icon: <FaHeartbeat className="stat-icon" />,
      color: "success",
    },
    {
      title: "Active Prescriptions",
      value: "156",
      icon: <FaPills className="stat-icon" />,
      color: "warning",
    },
    {
      title: "Research Papers",
      value: "28",
      icon: <FaNotesMedical className="stat-icon" />,
      color: "info",
    },
  ];

  return (
    <DashboardLayout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="profile-page"
      >
        <Container fluid>
          {/* Page Header */}
          <Row className="mb-4">
            <Col>
              <motion.h1
                className="page-title"
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.4 }}
              >
                My Profile
              </motion.h1>
            </Col>
          </Row>

          {/* Main Profile Section */}
          <Row className="g-4">
            {/* Left Column - Profile Card */}
            <Col lg={4}>
              <motion.div whileHover={{ scale: 1.02 }}>
                <Card className="profile-card shadow-sm">
                  <Card.Body className="text-center">
                    <motion.div
                      className="profile-avatar"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <img
                        src="https://randomuser.me/api/portraits/women/44.jpg"
                        alt="Profile"
                        className="rounded-circle mb-3"
                        width="150"
                      />
                    </motion.div>
                    <h3 className="mb-3">{userData.name}</h3>
                    <h5 className="text-muted mb-4">{userData.specialty}</h5>

                    <div className="profile-details">
                      <div className="detail-item">
                        <FaEnvelope className="detail-icon" />
                        <span>{userData.email}</span>
                      </div>
                      <div className="detail-item">
                        <FaPhone className="detail-icon" />
                        <span>{userData.phone}</span>
                      </div>
                      <div className="detail-item">
                        <FaMapMarkerAlt className="detail-icon" />
                        <span>{userData.address}</span>
                      </div>
                      <div className="detail-item">
                        <FaCalendarAlt className="detail-icon" />
                        <span>{userData.dob}</span>
                      </div>
                      <div className="detail-item">
                        <FaUserShield className="detail-icon" />
                        <span>{userData.yearsExperience} years experience</span>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>

            {/* Right Column - Stats and Info */}
            <Col lg={8}>
              <Row className="g-4 mb-4">
                {stats.map((stat, index) => (
                  <Col md={6} key={index}>
                    <motion.div
                      whileHover={{ y: -5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Card
                        className={`stat-card border-${stat.color} shadow-sm`}
                      >
                        <Card.Body>
                          <div className="d-flex justify-content-between align-items-center">
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
                        </Card.Body>
                      </Card>
                    </motion.div>
                  </Col>
                ))}
              </Row>

              {/* Tabs Section */}
              <Row>
                <Col>
                  <Card className="shadow-sm">
                    <Card.Body>
                      <Tabs defaultActiveKey="about" className="mb-3">
                        <Tab eventKey="about" title="About">
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.1 }}
                          >
                            <h5 className="mt-3">Professional Bio</h5>
                            <p className="text-muted">{userData.bio}</p>

                            <h5 className="mt-4">Specializations</h5>
                            <div className="skills-grid">
                              <div className="skill-item">Cardiac Imaging</div>
                              <div className="skill-item">Echocardiography</div>
                              <div className="skill-item">Preventive Care</div>
                              <div className="skill-item">Heart Failure</div>
                              <div className="skill-item">Arrhythmias</div>
                            </div>

                            <h5 className="mt-4">Languages</h5>
                            <div className="d-flex gap-2">
                              <span className="badge bg-primary">English</span>
                              <span className="badge bg-success">Spanish</span>
                              <span className="badge bg-info">French</span>
                            </div>
                          </motion.div>
                        </Tab>
                        <Tab eventKey="activity" title="Activity">
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.1 }}
                          >
                            <h5 className="mt-3">Recent Activity</h5>
                            <div className="activity-timeline">
                              {[
                                {
                                  date: "Today",
                                  action: "Updated patient records",
                                  time: "2:45 PM",
                                },
                                {
                                  date: "Yesterday",
                                  action: "Completed 5 consultations",
                                  time: "4:30 PM",
                                },
                                {
                                  date: "May 12",
                                  action: "Published new research paper",
                                  time: "11:20 AM",
                                },
                                {
                                  date: "May 10",
                                  action: "Attended Cardiology Conference",
                                  time: "All day",
                                },
                              ].map((item, i) => (
                                <div key={i} className="timeline-item">
                                  <div className="timeline-marker"></div>
                                  <div className="timeline-content">
                                    <h6>{item.action}</h6>
                                    <small className="text-muted">
                                      {item.date} • {item.time}
                                    </small>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </motion.div>
                        </Tab>
                        <Tab eventKey="settings" title="Settings">
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.1 }}
                          >
                            <h5 className="mt-3">Account Settings</h5>
                            <div className="settings-grid">
                              <div className="setting-item">
                                <h6>Notification Preferences</h6>
                                <small className="text-muted">
                                  Manage your notification settings
                                </small>
                              </div>
                              <div className="setting-item">
                                <h6>Privacy Settings</h6>
                                <small className="text-muted">
                                  Control your data privacy
                                </small>
                              </div>
                              <div className="setting-item">
                                <h6>Change Password</h6>
                                <small className="text-muted">
                                  Update your login credentials
                                </small>
                              </div>
                              <div className="setting-item">
                                <h6>Two-Factor Authentication</h6>
                                <small className="text-muted">
                                  Enable for extra security
                                </small>
                              </div>
                            </div>
                          </motion.div>
                        </Tab>
                      </Tabs>
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

export default Profile;
