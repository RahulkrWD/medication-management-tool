import React, { useState } from "react";
import "../../styles/Navbar.css";
import {
  FaThList,
  FaBlog,
  FaHistory,
  FaHeadset,
  FaSignInAlt,
  FaTachometerAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isAuthenticated, userId } = useSelector((state) => state.auth);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const baseNavItems = [
    { text: "App Features", icon: <FaThList />, id: "features" },
    { text: "Blog", icon: <FaBlog />, id: "blog" },
    { text: "Our Story", icon: <FaHistory />, id: "story" },
    { text: "Support", icon: <FaHeadset />, id: "support" },
  ];

  const authNavItem = isAuthenticated
    ? {
        text: "Dashboard",
        icon: <FaTachometerAlt />,
        id: `dashboard/${userId}`,
      }
    : { text: "Login", icon: <FaSignInAlt />, id: "login" };

  const navItems = [...baseNavItems, authNavItem];
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        {/* Logo/Brand */}
        <motion.div
          className="navbar-brands"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/" className="logo-text">
            CD Medisafe
          </Link>
        </motion.div>

        {/* Mobile Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          <motion.div
            animate={isOpen ? "open" : "closed"}
            variants={{
              open: { rotate: 90 },
              closed: { rotate: 0 },
            }}
          >
            <span className="navbar-toggler-icon"></span>
          </motion.div>
        </button>

        {/* Navbar Links */}
        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>
          <ul className="navbar-nav ms-auto">
            {navItems.map((item, index) => (
              <motion.li
                key={item.id}
                className="nav-item"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.1 * index,
                }}
                whileHover={{ scale: 1.05 }}
              >
                <Link className="nav-link" to={`/${item.id}`}>
                  <span className="nav-icon">{item.icon}</span>
                  <span className="nav-text">{item.text}</span>
                  <span className="nav-underline"></span>
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
