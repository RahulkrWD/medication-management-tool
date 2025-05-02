import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import DashboardLayout from "../components/dashboard/DashboardLayout";
import { profile } from "../redux/AuthSlice";
import "../styles/Profile.css";
import { Container, Row, Col, Card, Badge } from "react-bootstrap";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaTint,
  FaNotesMedical,
  FaHeartbeat,
  FaPills,
  FaUser,
  FaInfoCircle,
  FaChartBar,
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

  const patient = {
    name: `${user?.firstName} ${user?.lastName}`,
    email: user?.email,
    phone: user?.mobileNumber,
    address: user?.address,
    dob: user?.dateOfBirth,
    bloodGroup: user?.bloodGroup,
    bio: user?.about || "No bio information available.",
    languages: user?.languages || ["English"],
    stats: [
      {
        title: "Upcoming Appointments",
        value: 3,
        icon: <FaCalendarAlt />,
        color: "info",
      },
      { title: "Prescriptions", value: 5, icon: <FaPills />, color: "success" },
      {
        title: "Lab Results",
        value: 12,
        icon: <FaNotesMedical />,
        color: "warning",
      },
      {
        title: "Heart Rate",
        value: "72 bpm",
        icon: <FaHeartbeat />,
        color: "danger",
      },
    ],
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const iconHoverEffect = {
    scale: 1.2,
    transition: { duration: 0.2 },
  };

  return (
    <DashboardLayout>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="patient-profile-container"
      >
        <Container className="mt-4">
          {/* Page Header */}
          <motion.div variants={itemVariants} className="mb-4">
            <h1 className="page-title">
              <FaUser className="me-3" />
              Patient Profile
            </h1>
            <p className="text-muted">View and manage patient information</p>
          </motion.div>

          <Row>
            <Col md={4}>
              <motion.div variants={itemVariants}>
                <Card className="profile-card shadow-sm">
                  <Card.Body className="text-center">
                    <motion.img
                      src="https://randomuser.me/api/portraits/women/44.jpg"
                      alt="Profile"
                      className="profile-avatar mb-3"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />
                    <h3 className="mb-3">{patient.name}</h3>

                    <div className="profile-details text-start mt-4">
                      <motion.div
                        className="detail-item mb-3"
                        whileHover={{ x: 5 }}
                      >
                        <motion.span whileHover={iconHoverEffect}>
                          <FaEnvelope className="me-2 text-primary" />
                        </motion.span>
                        {patient.email}
                      </motion.div>

                      <motion.div
                        className="detail-item mb-3"
                        whileHover={{ x: 5 }}
                      >
                        <motion.span whileHover={iconHoverEffect}>
                          <FaPhone className="me-2 text-primary" />
                        </motion.span>
                        {patient.phone}
                      </motion.div>

                      <motion.div
                        className="detail-item mb-3"
                        whileHover={{ x: 5 }}
                      >
                        <motion.span whileHover={iconHoverEffect}>
                          <FaMapMarkerAlt className="me-2 text-primary" />
                        </motion.span>
                        {patient.address || "No address provided"}
                      </motion.div>

                      <motion.div
                        className="detail-item mb-3"
                        whileHover={{ x: 5 }}
                      >
                        <motion.span whileHover={iconHoverEffect}>
                          <FaCalendarAlt className="me-2 text-primary" />
                        </motion.span>
                        {patient.dob || "Date of birth not specified"}
                      </motion.div>

                      <motion.div
                        className="detail-item mb-3"
                        whileHover={{ x: 5 }}
                      >
                        <motion.span whileHover={iconHoverEffect}>
                          <FaTint className="me-2 text-primary" />
                        </motion.span>
                        Blood Group: {patient.bloodGroup || "Unknown"}
                      </motion.div>
                    </div>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>

            <Col md={8}>
              <motion.div variants={itemVariants}>
                <Card className="mb-4 shadow-sm">
                  <Card.Body>
                    <div className="d-flex align-items-center mb-3">
                      <FaInfoCircle className="me-2 text-info" size={20} />
                      <h5 className="mb-0">Personal Information</h5>
                    </div>
                    <p className="text-muted">{patient.bio}</p>

                    <div className="mt-4">
                      <div className="d-flex align-items-center mb-2">
                        <FaInfoCircle className="me-2 text-info" size={20} />
                        <h6 className="mb-0">Languages Spoken</h6>
                      </div>
                      <div>
                        {patient.languages.map((lang, idx) => (
                          <Badge
                            bg="secondary"
                            className="me-2 mb-2"
                            key={idx}
                            as={motion.span}
                            whileHover={{ scale: 1.1 }}
                          >
                            {lang}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </motion.div>

              <motion.div variants={itemVariants}>
                <div className="d-flex align-items-center mb-3">
                  <FaChartBar className="me-2 text-primary" size={20} />
                  <h5 className="mb-0">Health Statistics</h5>
                </div>

                <Row>
                  {patient.stats.map((stat, idx) => (
                    <Col md={6} key={idx}>
                      <motion.div variants={itemVariants}>
                        <Card
                          className={`stat-card border-start border-${stat.color} mb-4 shadow-sm`}
                          as={motion.div}
                          whileHover={{
                            y: -5,
                            boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
                          }}
                        >
                          <Card.Body className="d-flex align-items-center">
                            <motion.div
                              className={`stat-icon text-${stat.color} me-3`}
                              whileHover={{ scale: 1.2 }}
                            >
                              {stat.icon}
                            </motion.div>
                            <div>
                              <h6 className="mb-1 text-muted">{stat.title}</h6>
                              <h4 className="mb-0">{stat.value}</h4>
                            </div>
                          </Card.Body>
                        </Card>
                      </motion.div>
                    </Col>
                  ))}
                </Row>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </motion.div>
    </DashboardLayout>
  );
}

export default Profile;
