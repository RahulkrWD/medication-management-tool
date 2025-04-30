import React, { useState } from "react";
import {
  FaPills,
  FaBell,
  FaChartLine,
  FaUserFriends,
  FaMobileAlt,
  FaShieldAlt,
  FaCalendarCheck,
  FaQuestionCircle,
} from "react-icons/fa";
import { motion } from "framer-motion";
import Layout from "../components/Layout/Layout";
import "../styles/Features.css";
const Features = () => {
  const [activeTab, setActiveTab] = useState("all");

  const features = [
    {
      id: 1,
      title: "Medication Management",
      description:
        "Track all your medications in one place with customizable schedules and dosages.",
      icon: <FaPills />,
      category: "medication",
      highlight: true,
    },
    {
      id: 2,
      title: "Smart Reminders",
      description:
        "Never miss a dose with customizable alerts that adapt to your routine.",
      icon: <FaBell />,
      category: "reminders",
      highlight: true,
    },
    {
      id: 3,
      title: "Health Analytics",
      description:
        "Visualize your medication adherence and health trends over time.",
      icon: <FaChartLine />,
      category: "analytics",
    },
    {
      id: 4,
      title: "Caregiver Network",
      description:
        "Connect with family members or caregivers for added support.",
      icon: <FaUserFriends />,
      category: "sharing",
    },
    {
      id: 5,
      title: "Mobile & Web Access",
      description:
        "Access your medication plan anywhere, anytime across all devices.",
      icon: <FaMobileAlt />,
      category: "access",
    },
    {
      id: 6,
      title: "Advanced Security",
      description: "HIPAA-compliant protection for your sensitive health data.",
      icon: <FaShieldAlt />,
      category: "security",
    },
    {
      id: 7,
      title: "Appointment Tracking",
      description:
        "Sync with your calendar to manage doctor visits and prescriptions.",
      icon: <FaCalendarCheck />,
      category: "organization",
    },
    {
      id: 8,
      title: "Medication Database",
      description:
        "Comprehensive information about your medications and potential interactions.",
      icon: <FaQuestionCircle />,
      category: "education",
    },
  ];

  const categories = [
    { id: "all", name: "All Features" },
    { id: "medication", name: "Medication" },
    { id: "reminders", name: "Reminders" },
    { id: "analytics", name: "Analytics" },
    { id: "sharing", name: "Sharing" },
  ];

  const filteredFeatures =
    activeTab === "all"
      ? features
      : features.filter((feature) => feature.category === activeTab);

  const currentCategoryName =
    categories.find((cat) => cat.id === activeTab)?.name || "Features";
  return (
    <Layout>
      <div className="features-page">
        {/* Hero Section */}
        <section className="features-hero">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="hero-content text-center"
            >
              <h1 className="display-4 fw-bold mb-3">Powerful Features</h1>
              <p className="lead mb-4">
                Everything you need to manage medications effectively and
                improve health outcomes
              </p>
            </motion.div>
          </div>
        </section>

        {/* Category Tabs */}
        <section className="category-tabs py-4 bg-light">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="d-flex flex-wrap justify-content-center">
                  {categories.map((category) => (
                    <motion.button
                      key={category.id}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`category-btn ${
                        activeTab === category.id ? "active" : ""
                      }`}
                      onClick={() => setActiveTab(category.id)}
                    >
                      {category.name}
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* All Features Grid */}
        <section className="all-features py-5 bg-light">
          <div className="container">
            {/* <h2 className="text-center fw-bold mb-5">
              {activeTab === "all" ? "All Features" : ""}
            </h2> */}
            <h2 className="text-center fw-bold mb-5">{currentCategoryName}</h2>

            <div className="features-grid">
              {filteredFeatures.map((feature) => (
                <motion.div
                  key={feature.id}
                  className="feature-card"
                  whileHover={{ scale: 1.03 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="card-icon">{feature.icon}</div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Highlighted Features */}
        <section className="highlight-features py-5">
          <div className="container">
            <h2 className="text-center fw-bold mb-5">Key Features</h2>
            <div className="row g-4">
              {features
                .filter((feature) => feature.highlight)
                .map((feature) => (
                  <div key={feature.id} className="col-md-6">
                    <motion.div
                      whileHover={{ y: -10 }}
                      className="highlight-card"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="feature-icon">{feature.icon}</div>
                      <h3>{feature.title}</h3>
                      <p>{feature.description}</p>
                      <a href="#learn-more" className="learn-more">
                        Learn more <span>&rarr;</span>
                      </a>
                    </motion.div>
                  </div>
                ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="features-cta py-5 text-white">
          <div className="container text-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="fw-bold mb-4">
                Ready to Transform Your Medication Management?
              </h2>
              <div className="d-flex justify-content-center gap-3">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn btn-light btn-lg px-4"
                >
                  Get Started
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn btn-outline-light btn-lg px-4"
                >
                  See Pricing
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Features;
