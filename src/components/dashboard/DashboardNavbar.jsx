import React, { useEffect, useState } from "react";
import {
  FaBell,
  FaUserCircle,
  FaSignOutAlt,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "../../styles/Dashboard.css";
import { useDispatch, useSelector } from "react-redux";
import { profile } from "../../redux/AuthSlice";

const DashboardNavbar = ({ toggleSlider, isSliderOpen }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { userId, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(profile(userId));
  }, [userId]);

  return (
    <nav className="dashboard-navbar">
      <div className="navbar-container">
        {/* Left Section */}
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

        {/* Right Section */}
        <div className="navbar-right">
          <motion.div
            className="notification-icon"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Notifications"
          >
            <FaBell />
            <span className="notification-badge">3</span>
          </motion.div>

          <div className="user-dropdown">
            <motion.div
              className="user-profile"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              whileHover={{ scale: 1.05 }}
              aria-label="User profile"
            >
              <FaUserCircle className="user-avatar" />
              <span className="username">{user?.firstName}</span>
            </motion.div>

            {isDropdownOpen && (
              <motion.div
                className="dropdown-menu"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                <Link to="/profile" className="dropdown-item">
                  My Profile
                </Link>
                <Link to="/settings" className="dropdown-item">
                  Settings
                </Link>
                <div className="dropdown-divider"></div>
                <button className="dropdown-item logout-btn">
                  <FaSignOutAlt /> Logout
                </button>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default DashboardNavbar;
