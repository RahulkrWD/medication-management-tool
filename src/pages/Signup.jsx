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
  FaPhone,
  FaMapMarkerAlt,
  FaInfoCircle,
  FaTint,
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
    firstName: "",
    lastName: "",
    email: "",
    gender: "",
    password: "",
    dateOfBirth: "",
    mobileNumber: "",
    address: "",
    bloodGroup: "",
    languages: [],
    about: "",
  });

  const languageOptions = [
    "English",
    "Spanish",
    "French",
    "German",
    "Hindi",
    "Chinese",
    "Arabic",
    "Other",
  ];

  const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

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

  const handleLanguageChange = (language) => {
    setFormData((prev) => {
      if (prev.languages.includes(language)) {
        return {
          ...prev,
          languages: prev.languages.filter((lang) => lang !== language),
        };
      } else {
        return {
          ...prev,
          languages: [...prev.languages, language],
        };
      }
    });
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
          <div className="col-md-10 col-lg-8">
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
                  {/* First Name Field */}
                  <motion.div
                    className="form-group"
                    whileHover={{ scale: 1.02 }}
                  >
                    <label htmlFor="firstName" className="form-label">
                      First Name
                    </label>
                    <div className="input-group">
                      <span className="input-group-text">
                        <FaUser />
                      </span>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        className="form-control"
                        placeholder="Enter your first name"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </motion.div>

                  {/* Last Name Field */}
                  <motion.div
                    className="form-group"
                    whileHover={{ scale: 1.02 }}
                  >
                    <label htmlFor="lastName" className="form-label">
                      Last Name
                    </label>
                    <div className="input-group">
                      <span className="input-group-text">
                        <FaUser />
                      </span>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        className="form-control"
                        placeholder="Enter your last name"
                        value={formData.lastName}
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

                  {/* Mobile Number Field */}
                  <motion.div
                    className="form-group"
                    whileHover={{ scale: 1.02 }}
                  >
                    <label htmlFor="mobileNumber" className="form-label">
                      Mobile Number
                    </label>
                    <div className="input-group">
                      <span className="input-group-text">
                        <FaPhone />
                      </span>
                      <input
                        type="tel"
                        id="mobileNumber"
                        name="mobileNumber"
                        className="form-control"
                        placeholder="Enter your mobile number"
                        value={formData.mobileNumber}
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

                  {/* Date of Birth Field */}
                  <motion.div
                    className="form-group"
                    whileHover={{ scale: 1.02 }}
                  >
                    <label htmlFor="dateOfBirth" className="form-label">
                      Date of Birth
                    </label>
                    <div className="input-group">
                      <span className="input-group-text">
                        <FaBirthdayCake />
                      </span>
                      <input
                        type="date"
                        id="dateOfBirth"
                        name="dateOfBirth"
                        className="form-control"
                        value={formData.dateOfBirth}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </motion.div>

                  {/* Blood Group Field */}
                  <motion.div
                    className="form-group"
                    whileHover={{ scale: 1.02 }}
                  >
                    <label htmlFor="bloodGroup" className="form-label">
                      Blood Group
                    </label>
                    <div className="input-group">
                      <span className="input-group-text">
                        <FaTint />
                      </span>
                      <select
                        id="bloodGroup"
                        name="bloodGroup"
                        className="form-select"
                        value={formData.bloodGroup}
                        onChange={handleChange}
                      >
                        <option value="">Select Blood Group</option>
                        {bloodGroups.map((group) => (
                          <option key={group} value={group}>
                            {group}
                          </option>
                        ))}
                      </select>
                    </div>
                  </motion.div>

                  {/* Address Field */}
                  <motion.div
                    className="form-group"
                    whileHover={{ scale: 1.02 }}
                  >
                    <label htmlFor="address" className="form-label">
                      Address
                    </label>
                    <div className="input-group">
                      <span className="input-group-text">
                        <FaMapMarkerAlt />
                      </span>
                      <input
                        type="text"
                        id="address"
                        name="address"
                        className="form-control"
                        placeholder="Enter your address"
                        value={formData.address}
                        onChange={handleChange}
                      />
                    </div>
                  </motion.div>

                  {/* Languages Field */}
                  <motion.div className="form-group">
                    <label className="form-label">Languages Spoken</label>
                    <div className="languages-container">
                      {languageOptions.map((language) => (
                        <motion.div
                          key={language}
                          className={`language-option ${
                            formData.languages.includes(language)
                              ? "selected"
                              : ""
                          }`}
                          onClick={() => handleLanguageChange(language)}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <input
                            type="checkbox"
                            id={`language-${language}`}
                            checked={formData.languages.includes(language)}
                            onChange={() => handleLanguageChange(language)}
                            hidden
                          />
                          <label htmlFor={`language-${language}`}>
                            {language}
                          </label>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* About Field */}
                  <motion.div
                    className="form-group"
                    whileHover={{ scale: 1.02 }}
                  >
                    <label htmlFor="about" className="form-label">
                      Tell Us About Yourself
                    </label>
                    <div className="input-group">
                      <span className="input-group-text">
                        <FaInfoCircle />
                      </span>
                      <textarea
                        id="about"
                        name="about"
                        className="form-control"
                        placeholder="Share something about yourself..."
                        rows="3"
                        value={formData.about}
                        onChange={handleChange}
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
                    <div className="success-message text-center mt-3 text-success">
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
