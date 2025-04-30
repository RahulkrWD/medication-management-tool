import React, { useState, useEffect } from "react";
import "../styles/Signup.css";
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaVenusMars,
  FaBirthdayCake,
  FaHome,
  FaSignInAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signup, clearAuthState } from "../redux/AuthSlice";

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, error, message } = useSelector((state) => state.auth);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    gender: "",
    password: "",
    age: "",
  });

  useEffect(() => {
    return () => {
      dispatch(clearAuthState());
    };
  }, [dispatch]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await dispatch(signup(formData)).unwrap();

      if (result) {
        setTimeout(() => {
          navigate("/login");
        }, 1500);
      }
    } catch (error) {
      console.error("Signup failed:", error);
    }
  };

  return (
    <div className="signup-page">
      {/* Header with App Name */}
      <motion.header
        className="signup-header"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="app-title">CD Medisafe</h1>
        <p className="app-tagline">Your Health Companion</p>
      </motion.header>

      {/* Main Signup Container */}
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <motion.div
              className="signup-container"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="signup-title">Create Account</h2>
              <p className="signup-subtitle">
                Join us to start your health journey
              </p>

              <form onSubmit={handleSubmit}>
                <div className="signup-grid">
                  {/* Name Field */}
                  <motion.div
                    className="form-group"
                    whileHover={{ scale: 1.02 }}
                  >
                    <label htmlFor="name" className="form-label">
                      Full Name
                    </label>
                    <div className="input-group">
                      <span className="input-group-text">
                        <FaUser />
                      </span>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </motion.div>

                  {/* Email Field */}
                  <motion.div
                    className="form-group"
                    whileHover={{ scale: 1.02 }}
                  >
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <div className="input-group">
                      <span className="input-group-text">
                        <FaEnvelope />
                      </span>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </motion.div>

                  {/* Gender Field */}
                  <motion.div
                    className="form-group"
                    whileHover={{ scale: 1.02 }}
                  >
                    <label htmlFor="gender" className="form-label">
                      Gender
                    </label>
                    <div className="input-group">
                      <span className="input-group-text">
                        <FaVenusMars />
                      </span>
                      <select
                        id="gender"
                        name="gender"
                        className="form-select"
                        value={formData.gender}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                        <option value="prefer-not-to-say">
                          Prefer not to say
                        </option>
                      </select>
                    </div>
                  </motion.div>

                  {/* Age Field */}
                  <motion.div
                    className="form-group"
                    whileHover={{ scale: 1.02 }}
                  >
                    <label htmlFor="age" className="form-label">
                      Age
                    </label>
                    <div className="input-group">
                      <span className="input-group-text">
                        <FaBirthdayCake />
                      </span>
                      <input
                        type="number"
                        id="age"
                        name="age"
                        className="form-control"
                        placeholder="Enter your age"
                        min="1"
                        max="120"
                        value={formData.age}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </motion.div>

                  {/* Password Field */}
                  <motion.div
                    className="form-group"
                    whileHover={{ scale: 1.02 }}
                  >
                    <label htmlFor="password" className="form-label">
                      Password
                    </label>
                    <div className="input-group">
                      <span className="input-group-text">
                        <FaLock />
                      </span>
                      <input
                        type="password"
                        id="password"
                        name="password"
                        className="form-control"
                        placeholder="Create a password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="password-strength mt-2">
                      <div className="strength-bar weak"></div>
                      <div className="strength-bar medium"></div>
                      <div className="strength-bar strong"></div>
                      <span className="strength-text">Password strength</span>
                    </div>
                  </motion.div>
                </div>

                {/* Signup Button */}
                <motion.button
                  disabled={loading}
                  type="submit"
                  className="btn btn-primary w-100 signup-btn"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>{loading ? "submitting...." : "Create Account"}</span>
                </motion.button>

                <motion.div
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {error && (
                    <div className="error-message text-center m-3 text-danger">
                      {error}
                    </div>
                  )}
                  {message && (
                    <div className="success-message text-center mt-3 text-danger">
                      {message}
                    </div>
                  )}
                </motion.div>

                {/* Divider */}
                <div className="divider my-4">
                  <span>Already have an account?</span>
                </div>

                {/* Additional Links */}
                <div className="d-flex justify-content-between">
                  <motion.div whileHover={{ x: 5 }}>
                    <Link to="/" className="nav-link">
                      <FaHome className="me-2" />
                      Go to Home
                    </Link>
                  </motion.div>
                  <motion.div whileHover={{ x: 5 }}>
                    <Link to="/login" className="nav-link">
                      <FaSignInAlt className="me-2" />
                      Login to Account
                    </Link>
                  </motion.div>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
