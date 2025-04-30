import React, { useState } from "react";
import {
  FaSearch,
  FaQuestionCircle,
  FaPhone,
  FaEnvelope,
  FaComments,
  FaUserCog,
  FaFileAlt,
  FaArrowRight,
} from "react-icons/fa";
import { motion } from "framer-motion";
import Layout from "../components/Layout/Layout";
import "../styles/Support.css";

const Support = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // FAQ Data
  const faqCategories = [
    {
      title: "Getting Started",
      questions: [
        {
          question: "How do I create an account?",
          answer: "Click 'Sign Up' and fill in your details.",
        },
        {
          question: "Is Medisafe free to use?",
          answer: "Yes, our basic features are completely free.",
        },
      ],
    },
    {
      title: "Account Issues",
      questions: [
        {
          question: "I forgot my password",
          answer: "Use the 'Forgot Password' link on the login page.",
        },
        {
          question: "How do I update my profile?",
          answer: "Go to Settings > Profile to make changes.",
        },
      ],
    },
  ];

  return (
    <Layout>
      <div className="support-page">
        {/* Hero Section with Search */}
        <section className="support-hero">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="container"
          >
            <h1 className="display-4 fw-bold mb-4">How can we help you?</h1>

            {/* Full-Width Search Bar */}
            <div className="search-container mb-5">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Search help articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button className="btn btn-primary" type="button">
                  <FaSearch /> Search
                </button>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Quick Help Section */}
        <section className="quick-help py-5 bg-light">
          <div className="container">
            <h2 className="text-center mb-5">Quick Help</h2>
            <div className="row g-4">
              {/* Contact Cards */}
              <div className="col-md-4">
                <motion.div whileHover={{ y: -5 }} className="help-card">
                  <div className="icon-container bg-primary">
                    <FaPhone size={24} />
                  </div>
                  <h4>Call Support</h4>
                  <p>+1 (800) 123-4567</p>
                  <a href="#call" className="stretched-link"></a>
                </motion.div>
              </div>

              <div className="col-md-4">
                <motion.div whileHover={{ y: -5 }} className="help-card">
                  <div className="icon-container bg-success">
                    <FaEnvelope size={24} />
                  </div>
                  <h4>Email Us</h4>
                  <p>support@medisafe.com</p>
                  <a href="#email" className="stretched-link"></a>
                </motion.div>
              </div>

              <div className="col-md-4">
                <motion.div whileHover={{ y: -5 }} className="help-card">
                  <div className="icon-container bg-warning">
                    <FaComments size={24} />
                  </div>
                  <h4>Live Chat</h4>
                  <p>Available 24/7</p>
                  <a href="#chat" className="stretched-link"></a>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="faq-section py-5">
          <div className="container">
            <h2 className="text-center mb-5">Frequently Asked Questions</h2>

            <div className="faq-grid">
              {faqCategories.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="faq-category"
                >
                  <h3 className="category-title">
                    <FaQuestionCircle className="me-2" />
                    {category.title}
                  </h3>
                  <div className="faq-questions">
                    {category.questions.map((item, qIndex) => (
                      <motion.div
                        key={qIndex}
                        whileHover={{ x: 5 }}
                        className="faq-item"
                      >
                        <div className="question">
                          {item.question}
                          <FaArrowRight className="ms-2" />
                        </div>
                        <div className="answer">{item.answer}</div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Resources Section */}
        <section className="resources py-5 bg-light">
          <div className="container">
            <h2 className="text-center mb-5">Resources</h2>
            <div className="row g-4">
              <div className="col-md-6">
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="resource-card"
                >
                  <FaUserCog size={32} className="text-primary mb-3" />
                  <h4>User Guides</h4>
                  <p>Step-by-step instructions for all features</p>
                  <a href="#guides" className="btn btn-outline-primary">
                    View Guides
                  </a>
                </motion.div>
              </div>
              <div className="col-md-6">
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="resource-card"
                >
                  <FaFileAlt size={32} className="text-primary mb-3" />
                  <h4>Documentation</h4>
                  <p>Technical details for developers</p>
                  <a href="#docs" className="btn btn-outline-primary">
                    View Docs
                  </a>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Support;
