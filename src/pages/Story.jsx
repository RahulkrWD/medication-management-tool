import React from "react";
import {
  FaSeedling,
  FaChartLine,
  FaUsers,
  FaLightbulb,
  FaTrophy,
  FaHeart,
  FaGlobe,
  FaHandshake,
  FaQuoteLeft,
  FaStar,
} from "react-icons/fa";
import { motion } from "framer-motion";
import "../styles/Story.css";
import Layout from "../components/Layout/Layout";

const Story = () => {
  // Timeline data
  const milestones = [
    {
      year: "2015",
      title: "Founded",
      description:
        "Started in a small Boston apartment with a vision to revolutionize medication management.",
      icon: <FaSeedling />,
    },
    {
      year: "2017",
      title: "First App Launch",
      description:
        "Released our first mobile app with basic medication tracking features.",
      icon: <FaChartLine />,
    },
    {
      year: "2019",
      title: "1 Million Users",
      description:
        "Reached our first million active users across 50 countries.",
      icon: <FaUsers />,
    },
    {
      year: "2021",
      title: "AI Integration",
      description:
        "Implemented machine learning for personalized health insights.",
      icon: <FaLightbulb />,
    },
    {
      year: "2023",
      title: "Industry Recognition",
      description: "Won 'Best Health App' at the Global Tech Awards.",
      icon: <FaTrophy />,
    },
  ];

  const challenges = [
    {
      title: "Regulatory Compliance",
      description:
        "Navigating complex healthcare regulations across different markets.",
      icon: <FaGlobe className="text-danger" />,
    },
    {
      title: "User Trust",
      description: "Building confidence in handling sensitive health data.",
      icon: <FaHeart className="text-danger" />,
    },
    {
      title: "Partnerships",
      description: "Establishing relationships with healthcare providers.",
      icon: <FaHandshake className="text-danger" />,
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Head of Product",
      quote:
        "Building Medisafe has been the most rewarding journey of my career. Seeing how we've helped millions manage their health keeps us motivated every day.",
      rating: 5,
      image: "/images/m1.jpg",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Lead Developer",
      quote:
        "The technical challenges we've overcome to ensure data security while maintaining usability have made this project truly special.",
      rating: 5,
      image: "/images/m4.jpg",
    },
    {
      id: 3,
      name: "Priya Patel",
      role: "UX Designer",
      quote:
        "Designing for healthcare requires both empathy and precision. Our team's commitment to accessibility sets us apart.",
      rating: 4,
      image: "/images/m3.jpg",
    },
    {
      id: 4,
      name: "Michael Chen",
      role: "Lead Developer",
      quote:
        "The technical challenges we've overcome to ensure data security while maintaining usability have made this project truly special.",
      rating: 5,
      image: "/images/m2.jpg",
    },
    {
      id: 5,
      name: "Sarah Johnson",
      role: "Head of Product",
      quote:
        "Building Medisafe has been the most rewarding journey of my career. Seeing how we've helped millions manage their health keeps us motivated every day.",
      rating: 5,
      image: "/images/m5.jpg",
    },
    {
      id: 6,
      name: "Michael Chen",
      role: "Lead Developer",
      quote:
        "The technical challenges we've overcome to ensure data security while maintaining usability have made this project truly special.",
      rating: 5,
      image: "/images/m6.jpg",
    },
  ];

  return (
    <Layout>
      <div className="story-page">
        {/* Hero Section */}
        <section className="story-hero">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="hero-content"
            >
              <h1 className="display-3 fw-bold mb-4">Our Story</h1>
              <p className="lead">
                From a simple idea to transforming millions of lives - this is
                our journey in making healthcare more accessible and manageable.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="mission-section py-5 bg-light">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 mb-4 mb-lg-0">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <h2 className="fw-bold mb-4">Why We Started</h2>
                  <p className="mb-4">
                    After witnessing his grandmother struggle with medication
                    management, our founder John Smith set out to create a
                    solution that would empower patients and caregivers alike.
                  </p>
                  <div className="mission-stats">
                    <div className="stat-item">
                      <h3>5M+</h3>
                      <p>Users Worldwide</p>
                    </div>
                    <div className="stat-item">
                      <h3>92%</h3>
                      <p>Adherence Rate</p>
                    </div>
                    <div className="stat-item">
                      <h3>50+</h3>
                      <p>Countries Served</p>
                    </div>
                  </div>
                </motion.div>
              </div>
              <div className="col-lg-6">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="mission-image"
                >
                  <div className="img-placeholder"></div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="timeline-section py-5">
          <div className="container">
            <h2 className="text-center fw-bold mb-5">Our Journey</h2>

            <div className="timeline-scroll-container">
              <div className="timeline-grid">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="timeline-card"
                  >
                    <div className="timeline-icon">{milestone.icon}</div>
                    <div className="timeline-year">{milestone.year}</div>
                    <h3 className="timeline-title">{milestone.title}</h3>
                    <p className="timeline-description">
                      {milestone.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Challenges Section */}
        <section className="challenges-section py-5 bg-light">
          <div className="container">
            <h2 className="text-center fw-bold mb-5">Challenges We Overcame</h2>
            <div className="row g-4">
              {challenges.map((challenge, index) => (
                <div className="col-md-4" key={index}>
                  <motion.div
                    whileHover={{ y: -10 }}
                    className="challenge-card"
                  >
                    <div className="challenge-icon">{challenge.icon}</div>
                    <h3>{challenge.title}</h3>
                    <p>{challenge.description}</p>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="feedback-section py-5 bg-light">
          <div className="container">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center fw-bold mb-5"
            >
              Our Team's Reflections
            </motion.h2>

            <div className="row g-4">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="col-md-4">
                  <motion.div
                    whileHover={{ y: -10 }}
                    className="feedback-card h-100"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <FaQuoteLeft className="quote-icon text-muted" />
                    <p className="feedback-quote">"{testimonial.quote}"</p>

                    <div className="d-flex align-items-center mb-3">
                      <div
                        className="feedback-img me-3"
                        style={{ backgroundImage: `url(${testimonial.image})` }}
                      ></div>
                      <div>
                        <h5 className="mb-0">{testimonial.name}</h5>
                        <small className="text-muted">{testimonial.role}</small>
                      </div>
                    </div>

                    <div className="rating">
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          className={
                            i < testimonial.rating
                              ? "text-warning"
                              : "text-muted"
                          }
                        />
                      ))}
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section py-5 bg-primary text-white">
          <div className="container text-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="fw-bold mb-4">Join Our Journey</h2>
              <p className="mb-4">
                Be part of our mission to transform healthcare management
              </p>
              <button className="btn btn-light btn-lg px-4">Get Started</button>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Story;
