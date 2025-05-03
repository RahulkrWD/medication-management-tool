import React from "react";
import { FaPills, FaUser, FaCog, FaSignOutAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../../styles/Dashboard.css";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/AuthSlice";
import { useBeginTour } from "../../context/BeginTourProvider";

const DashboardSlider = ({ isOpen, toggleSlider, isMobile }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { userId } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { refs } = useBeginTour();

  function handleLogout() {
    dispatch(logout());
    localStorage.removeItem("userId");
    localStorage.removeItem("isAuth");
    navigate("/");
  }

  const menuItems = [
    {
      id: 1,
      name: "Medications",
      icon: <FaPills />,
      path: `/medications/${userId}`,
      ref: refs.medicationsRef,
    },
    {
      id: 2,
      name: "Profile",
      icon: <FaUser />,
      path: `/profile/${userId}`,
      ref: refs.profileRef,
    },
    {
      id: 3,
      name: "Settings",
      icon: <FaCog />,
      path: `/settings/${userId}`,
      ref: refs.settingsRef,
    },
  ];

  return (
    <motion.div
      className={`slider-sidebar ${isOpen ? "open" : "closed"}`}
      initial={{ x: isMobile ? -300 : 0 }}
      animate={{ x: isOpen ? 0 : isMobile ? -300 : 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className="slider-header">
        <h3>Medisafe</h3>
      </div>

      <div className="slider-menu">
        {menuItems.map((item) => (
          <motion.div
            key={item.id}
            className={`menu-item ${
              location.pathname === item.path ? "active" : ""
            }`}
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Link
              to={item.path}
              className="menu-link"
              onClick={isMobile ? toggleSlider : null}
              ref={item.ref}
            >
              <span className="menu-icon">{item.icon}</span>
              <span className="menu-text">{item.name}</span>
            </Link>
          </motion.div>
        ))}
        <motion.div
          className="menu-item logout-item"
          whileHover={{ x: 5 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          ref={refs.logoutRef}
        >
          <button
            className="menu-link logout-button btn w-100"
            onClick={handleLogout}
          >
            <span className="menu-icon">
              <FaSignOutAlt />
            </span>
            <span className="menu-text">Logout</span>
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default DashboardSlider;
