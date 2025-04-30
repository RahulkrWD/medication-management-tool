import React from "react";
import "../styles/Header.css";
import {
  FaApple,
  FaGooglePlay,
  FaShieldAlt,
  FaHospital,
  FaAward,
} from "react-icons/fa";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <header className="story-header">
      <div className="container py-5">
        <div className="row align-items-center">
          {/* Text Content */}
          <div className="col-lg-6 mb-4 mb-lg-0">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="display-4 fw-bold mb-4">Our Story</h1>
              <p className="lead mb-4">
                We're a global team that's dedicated to making parents' lives
                easier by helping them take control of their medications,
                measurements and health journeys with the support of caregivers
                and loved ones.
              </p>
              <img
                className="icons-apple"
                src="https://medisafeapp.com/wp-content/uploads/2022/09/btn-appleStore.png"
              />

              <img
                className="icons-store"
                src="https://medisafeapp.com/wp-content/uploads/2022/09/btn-googlePlay.png"
              />
            </motion.div>
          </div>

          {/* Badges Section */}
          <div className="col-lg-6">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="badges-container"
            >
              <div className="row g-3">
                <div className="col-md-4">
                  <div className="badge-item">
                    <FaShieldAlt size={32} className="text-primary mb-2" />
                    <h5 className="fw-bold">236-BIT Encryption</h5>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="badge-item">
                    <FaHospital size={32} className="text-success mb-2" />
                    <h5 className="fw-bold">HIPAA Compliant</h5>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="badge-item">
                    <FaAward size={32} className="text-warning mb-2" />
                    <h5 className="fw-bold">ISO 27001 Certified</h5>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
