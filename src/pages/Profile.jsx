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
} from "react-icons/fa";

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
    bio: user?.about,
    languages: user?.languages,
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

  return (
    <DashboardLayout>
      <Container className="patient-profile mt-4">
        <Row>
          <Col md={4}>
            <Card className="profile-card">
              <Card.Body className="text-center">
                <img
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  alt="Profile"
                  className="profile-avatar mb-3"
                />
                <h3>{patient.name}</h3>

                <div className="profile-details text-start mt-4">
                  <p>
                    <FaEnvelope className="me-2" />
                    {patient.email}
                  </p>
                  <p>
                    <FaPhone className="me-2" />
                    {patient.phone}
                  </p>
                  <p>
                    <FaMapMarkerAlt className="me-2" />
                    {patient.address}
                  </p>
                  <p>
                    <FaCalendarAlt className="me-2" />
                    {patient.dob}
                  </p>
                  <p>
                    <FaTint className="me-2" />
                    Blood Group: {patient.bloodGroup}
                  </p>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={8}>
            <Card className="mb-4">
              <Card.Body>
                <h5>About</h5>
                <p>{patient.bio}</p>
                <h6>Languages</h6>
                {patient?.languages?.map((lang, idx) => (
                  <Badge bg="secondary" className="me-2" key={idx}>
                    {lang}
                  </Badge>
                ))}
              </Card.Body>
            </Card>
            <Row>
              {patient.stats.map((stat, idx) => (
                <Col md={6} key={idx}>
                  <Card
                    className={`stat-card border-start border-${stat.color} mb-4`}
                  >
                    <Card.Body className="d-flex align-items-center">
                      <div className={`stat-icon text-${stat.color} me-3`}>
                        {stat.icon}
                      </div>
                      <div>
                        <h6 className="mb-1">{stat.title}</h6>
                        <h4 className="mb-0">{stat.value}</h4>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </DashboardLayout>
  );
}

export default Profile;
