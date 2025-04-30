import React, { useEffect, useState } from "react";
import "../styles/Login.css";
import {
  FaUser,
  FaLock,
  FaHome,
  FaUserPlus,
  FaArrowRight,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearAuthState, login } from "../redux/AuthSlice";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error, isAuthenticated, message, userId } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isAuthenticated && userId) {
      localStorage.setItem("isAuth", JSON.stringify(isAuthenticated));
      localStorage.setItem("userId", userId);
      navigate("/dashboard");
    }
  }, [isAuthenticated, userId, navigate]);
  const [rememberMe, setRememberMe] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(clearAuthState());

    try {
      const result = await dispatch(login(formData)).unwrap();
    } catch (error) {
      console.log("Login Failed", error);
    }
  };

  return (
    <div className="login-page">
      {/* Header with App Name */}
      <motion.header
        className="login-header"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="app-title">CD Medisafe</h1>
        <p className="app-tagline">Your Health Companion</p>
      </motion.header>

      {/* Main Login Container */}
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-5">
            <motion.div
              className="login-container"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p className="login-subtitle">
                Welcome back! Please enter your details
              </p>

              <form onSubmit={handleSubmit}>
                {/* Email Input */}
                <motion.div
                  className="form-group mb-3"
                  whileHover={{ scale: 1.02 }}
                >
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <div className="input-group">
                    <span className="input-group-text">
                      <FaUser />
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

                {/* Password Input */}
                <motion.div
                  className="form-group mb-3"
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
                      placeholder="Enter your password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </motion.div>

                {/* Remember Me & Forgot Password */}
                <div className="d-flex justify-content-between mb-4">
                  <div className="form-check">
                    <input
                      type="checkbox"
                      id="rememberMe"
                      className="form-check-input"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                    />
                    <label htmlFor="rememberMe" className="form-check-label">
                      Remember me
                    </label>
                  </div>
                  <Link className="forgot-password">Forgot password?</Link>
                </div>

                {/* Login Button */}
                <motion.button
                  type="submit"
                  className="btn btn-primary w-100 login-btn"
                  whileTap={{ scale: 0.98 }}
                >
                  <span>{loading ? "Logging in..." : "Login"}</span>
                  <FaArrowRight className="ms-2" />
                </motion.button>

                <motion.div whileTap={{ scale: 0.98 }}>
                  {error && (
                    <div className="error-message text-center mt-3 text-danger">
                      {error}
                    </div>
                  )}
                  {message && (
                    <div className="text-center mt-3 text-danger">
                      {message}
                    </div>
                  )}
                </motion.div>

                {/* Divider */}
                <div className="divider my-4">
                  <span>or</span>
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
                    <Link to="/signup" className="nav-link">
                      <FaUserPlus className="me-2" />
                      Create New Account
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

export default Login;
