import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "../components/dashboard/DashboardLayout";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Tab,
  Tabs,
  ListGroup,
  Badge,
} from "react-bootstrap";
import {
  FaBell,
  FaPalette,
  FaLanguage,
  FaMoon,
  FaSun,
  FaVolumeUp,
  FaVolumeMute,
  FaEnvelope,
  FaCheck,
  FaCog,
} from "react-icons/fa";
import { motion } from "framer-motion";
import "../styles/Settings.css";

function Settings() {
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector((state) => state.auth);
  const [activeTab, setActiveTab] = useState("notifications");
  const [darkMode, setDarkMode] = useState(false);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [language, setLanguage] = useState("english");

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    // You would typically update a theme context or localStorage here
  };

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
  };

  return (
    <DashboardLayout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="settings-page"
      >
        <Container fluid>
          <Row className="mb-4">
            <Col>
              <motion.h1
                className="page-title"
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <FaCog />
                Settings
              </motion.h1>
            </Col>
          </Row>

          <Row>
            <Col lg={3} className="mb-4">
              <Card className="settings-nav-card shadow-sm">
                <ListGroup variant="flush">
                  <ListGroup.Item
                    action
                    active={activeTab === "notifications"}
                    onClick={() => setActiveTab("notifications")}
                    className="d-flex align-items-center"
                  >
                    <FaBell className="me-2" />
                    Notifications
                    <Badge pill bg="primary" className="ms-auto">
                      3
                    </Badge>
                  </ListGroup.Item>
                  <ListGroup.Item
                    action
                    active={activeTab === "appearance"}
                    onClick={() => setActiveTab("appearance")}
                    className="d-flex align-items-center"
                  >
                    <FaPalette className="me-2" />
                    Appearance
                  </ListGroup.Item>
                  <ListGroup.Item
                    action
                    active={activeTab === "language"}
                    onClick={() => setActiveTab("language")}
                    className="d-flex align-items-center"
                  >
                    <FaLanguage className="me-2" />
                    Language
                  </ListGroup.Item>
                </ListGroup>
              </Card>
            </Col>

            <Col lg={9}>
              <Card className="settings-content-card shadow-sm">
                <Card.Body>
                  <Tabs
                    activeKey={activeTab}
                    onSelect={(k) => setActiveTab(k)}
                    className="mb-3 d-lg-none"
                  >
                    <Tab eventKey="notifications" title="Notifications">
                      <NotificationSettings
                        notificationsEnabled={notificationsEnabled}
                        setNotificationsEnabled={setNotificationsEnabled}
                        emailNotifications={emailNotifications}
                        setEmailNotifications={setEmailNotifications}
                        soundEnabled={soundEnabled}
                        setSoundEnabled={setSoundEnabled}
                      />
                    </Tab>
                    <Tab eventKey="appearance" title="Appearance">
                      <AppearanceSettings
                        darkMode={darkMode}
                        toggleDarkMode={toggleDarkMode}
                      />
                    </Tab>
                    <Tab eventKey="language" title="Language">
                      <LanguageSettings
                        language={language}
                        handleLanguageChange={handleLanguageChange}
                      />
                    </Tab>
                  </Tabs>

                  <div className="d-none d-lg-block">
                    {activeTab === "notifications" && (
                      <NotificationSettings
                        notificationsEnabled={notificationsEnabled}
                        setNotificationsEnabled={setNotificationsEnabled}
                        emailNotifications={emailNotifications}
                        setEmailNotifications={setEmailNotifications}
                        soundEnabled={soundEnabled}
                        setSoundEnabled={setSoundEnabled}
                      />
                    )}
                    {activeTab === "appearance" && (
                      <AppearanceSettings
                        darkMode={darkMode}
                        toggleDarkMode={toggleDarkMode}
                      />
                    )}
                    {activeTab === "language" && (
                      <LanguageSettings
                        language={language}
                        handleLanguageChange={handleLanguageChange}
                      />
                    )}
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
const NotificationSettings = ({
  notificationsEnabled,
  setNotificationsEnabled,
  emailNotifications,
  setEmailNotifications,
  soundEnabled,
  setSoundEnabled,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <h4 className="mb-4">Notification Preferences</h4>

      <div className="settings-grid mb-4">
        <div className={`setting-item ${notificationsEnabled ? "active" : ""}`}>
          <div className="d-flex align-items-center">
            <FaBell className="setting-icon me-3" />
            <div>
              <h5 className="mb-1">Enable Notifications</h5>
              <small className="text-muted">Receive app notifications</small>
            </div>
          </div>
          <Form.Check
            type="switch"
            checked={notificationsEnabled}
            onChange={() => setNotificationsEnabled(!notificationsEnabled)}
            className="ms-auto"
          />
        </div>

        <div className={`setting-item ${emailNotifications ? "active" : ""}`}>
          <div className="d-flex align-items-center">
            <FaEnvelope className="setting-icon me-3" />
            <div>
              <h5 className="mb-1">Email Notifications</h5>
              <small className="text-muted">
                Receive notifications via email
              </small>
            </div>
          </div>
          <Form.Check
            type="switch"
            checked={emailNotifications}
            onChange={() => setEmailNotifications(!emailNotifications)}
            className="ms-auto"
            disabled={!notificationsEnabled}
          />
        </div>

        <div className={`setting-item ${soundEnabled ? "active" : ""}`}>
          <div className="d-flex align-items-center">
            {soundEnabled ? (
              <FaVolumeUp className="setting-icon me-3" />
            ) : (
              <FaVolumeMute className="setting-icon me-3" />
            )}
            <div>
              <h5 className="mb-1">Sound Alerts</h5>
              <small className="text-muted">Play sound for notifications</small>
            </div>
          </div>
          <Form.Check
            type="switch"
            checked={soundEnabled}
            onChange={() => setSoundEnabled(!soundEnabled)}
            className="ms-auto"
            disabled={!notificationsEnabled}
          />
        </div>
      </div>

      <h5 className="mb-3">Notification Types</h5>
      <div className="notification-types-grid">
        <Form.Check
          type="checkbox"
          id="appointment-reminders"
          label="Appointment Reminders"
          defaultChecked
          disabled={!notificationsEnabled}
        />
        <Form.Check
          type="checkbox"
          id="medication-alerts"
          label="Medication Alerts"
          defaultChecked
          disabled={!notificationsEnabled}
        />
        <Form.Check
          type="checkbox"
          id="test-results"
          label="Test Results"
          defaultChecked
          disabled={!notificationsEnabled}
        />
        <Form.Check
          type="checkbox"
          id="messages"
          label="Messages from Patients"
          defaultChecked
          disabled={!notificationsEnabled}
        />
      </div>
    </motion.div>
  );
};

const AppearanceSettings = ({ darkMode, toggleDarkMode }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <h4 className="mb-4">Appearance</h4>

      <div className="settings-grid">
        <div className={`setting-item ${darkMode ? "active" : ""}`}>
          <div className="d-flex align-items-center">
            {darkMode ? (
              <FaMoon className="setting-icon me-3" />
            ) : (
              <FaSun className="setting-icon me-3" />
            )}
            <div>
              <h5 className="mb-1">Dark Mode</h5>
              <small className="text-muted">
                Switch between light and dark theme
              </small>
            </div>
          </div>
          <Form.Check
            type="switch"
            checked={darkMode}
            onChange={toggleDarkMode}
            className="ms-auto"
          />
        </div>
      </div>

      <h5 className="mt-4 mb-3">Theme Colors</h5>
      <div className="theme-colors-grid">
        {["primary", "blue", "green", "purple", "orange"].map((color) => (
          <motion.div
            key={color}
            className={`theme-color ${color}`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="color-preview"></div>
            <span className="color-name">
              {color.charAt(0).toUpperCase() + color.slice(1)}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

const LanguageSettings = ({ language, handleLanguageChange }) => {
  const languages = [
    { code: "english", name: "English" },
    { code: "spanish", name: "Spanish" },
    { code: "french", name: "French" },
    { code: "german", name: "German" },
    { code: "chinese", name: "Chinese" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <h4 className="mb-4">Language Preferences</h4>

      <div className="settings-grid">
        {languages.map((lang) => (
          <div
            key={lang.code}
            className={`setting-item ${language === lang.code ? "active" : ""}`}
            onClick={() => handleLanguageChange(lang.code)}
          >
            <div className="d-flex align-items-center">
              <FaLanguage className="setting-icon me-3" />
              <div>
                <h5 className="mb-1">{lang.name}</h5>
              </div>
            </div>
            {language === lang.code && <FaCheck className="text-success" />}
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Settings;
