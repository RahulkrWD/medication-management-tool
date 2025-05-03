import React, { useEffect } from "react";
import { FaBell, FaUserCircle, FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "../../styles/Dashboard.css";
import { useDispatch, useSelector } from "react-redux";
import { QuestionCircleOutlined } from "@ant-design/icons";
import { profile } from "../../redux/AuthSlice";
import { useBeginTour } from "../../context/BeginTourProvider";

const DashboardNavbar = ({ toggleSlider, isSliderOpen }) => {
  const { userId, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { refs, beginTour } = useBeginTour();

  useEffect(() => {
    dispatch(profile(userId));
  }, [userId]);

  return (
    <nav className="dashboard-navbar">
      <div className="navbar-container">
        <div className="navbar-left">
          <motion.button
            className="toggle-btn"
            onClick={toggleSlider}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label={isSliderOpen ? "Close menu" : "Open menu"}
          >
            {isSliderOpen ? <FaTimes /> : <FaBars />}
          </motion.button>
          <Link
            to={`/medications/${userId}`}
            className="navbar-brand-dashboard"
          >
            Medisafe Dashboard
          </Link>
        </div>

        <div className="navbar-right">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <button
              onClick={beginTour}
              className="tour-button"
              ref={refs.navbarTourButton}
              style={{
                background: "#1890ff",
                color: "white",
                border: "none",
                padding: "8px 16px",
                borderRadius: "4px",
                cursor: "pointer",
                marginRight: "15px",
              }}
            >
              <QuestionCircleOutlined />
            </button>
          </motion.div>

          <motion.div
            className="notification-icon"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Notifications"
            ref={refs.notificationButton}
          >
            <FaBell />
            <span className="notification-badge">3</span>
          </motion.div>

          <div className="user-dropdown">
            <motion.div
              className="user-profile"
              whileHover={{ scale: 1.05 }}
              aria-label="User profile"
              ref={refs.profileButton}
            >
              <FaUserCircle className="user-avatar" />
              <span className="username">{user?.firstName}</span>
            </motion.div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default DashboardNavbar;
