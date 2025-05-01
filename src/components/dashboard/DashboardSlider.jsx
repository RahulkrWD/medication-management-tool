import React from "react";
import {
  FaHome,
  FaPills,
  FaUser,
  FaCog,
  FaCalendarAlt,
  FaSignOutAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../../styles/Dashboard.css";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/AuthSlice";

const DashboardSlider = ({ isOpen, toggleSlider, isMobile }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { userId } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  function handleLogout() {
    dispatch(logout());
    localStorage.removeItem("userId");
    localStorage.removeItem("isAuth");
    navigate("/");
  }

  const menuItems = [
    {
      id: 1,
      name: "Dashboard",
      icon: <FaHome />,
      path: `/dashboard/${userId}`,
    },
    {
      id: 2,
      name: "Medications",
      icon: <FaPills />,
      path: `/medications/${userId}`,
    },

    { id: 3, name: "Profile", icon: <FaUser />, path: `/profile/${userId}` },
    { id: 4, name: "Settings", icon: <FaCog />, path: `/settings/${userId}` },
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
