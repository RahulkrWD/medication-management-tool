import {
  FaHeartbeat,
  FaBell,
  FaChartLine,
  FaUserFriends,
  FaMobileAlt,
  FaQuoteLeft,
  FaArrowRight,
} from "react-icons/fa";
import { motion } from "framer-motion";
import "../../styles/Home.css";

const HomeMain = () => {
  // Features data
  const features = [
    {
      id: 1,
      title: "Medication Tracking",
      description: "Manage all your medications in one place",
      icon: <FaHeartbeat />,
      color: "#e74c3c",
    },
    {
      id: 2,
      title: "Smart Reminders",
      description: "Never miss a dose with customizable alerts",
      icon: <FaBell />,
      color: "#3498db",
    },
    {
      id: 3,
      title: "Health Insights",
      description: "Track your progress with detailed analytics",
      icon: <FaChartLine />,
      color: "#2ecc71",
    },
    {
      id: 4,
      title: "Caregiver Network",
      description: "Share updates with family or caregivers",
      icon: <FaUserFriends />,
      color: "#9b59b6",
    },
  ];

  // Testimonials data
  const testimonials = [
    {
      id: 1,
      quote:
        "This app has completely transformed how I manage my medications. I haven't missed a dose in months!",
      author: "Sarah J., Diabetes Patient",
      rating: 5,
    },
    {
      id: 2,
      quote:
        "As a caregiver for my elderly parents, this app gives me peace of mind knowing they're taking their meds on time.",
      author: "Michael T., Caregiver",
      rating: 5,
    },
    {
      id: 3,
      quote:
        "The analytics helped me identify patterns in my health I never noticed before. Highly recommended!",
      author: "Priya K., Hypertension Patient",
      rating: 4,
    },
  ];

  return (
    <main className="home-main">
      {/* Hero Section */}
      <section className="hero-section py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="display-4 fw-bold mb-3">
                  Take Control of Your Health
                </h1>
                <p className="lead mb-4">
                  Medisafe helps you manage medications, track health metrics,
                  and stay connected with your care team.
                </p>
                <div className="d-flex flex-wrap gap-3">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn btn-primary btn-lg px-4"
                  >
                    Get Started
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn btn-outline-primary btn-lg px-4"
                  >
                    Learn More
                  </motion.button>
                </div>
              </motion.div>
            </div>
            <div className="col-lg-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="hero-image"
              >
                <div className="img-placeholder"></div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="features-section py-5 bg-light">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center fw-bold mb-5"
          >
            Why Choose Medisafe
          </motion.h2>

          <div className="features-grid">
            {features.map((feature) => (
              <motion.div
                key={feature.id}
                className="feature-card"
                whileHover={{ y: -10 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="feature-icon" style={{ color: feature.color }}>
                  {feature.icon}
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
                <a href="#learn-more" className="feature-link">
                  Learn more <FaArrowRight />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* App Showcase */}
      <section className="app-showcase py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 order-lg-2 mb-4 mb-lg-0">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="fw-bold mb-3">Available On All Devices</h2>
                <p className="mb-4">
                  Access your health data anytime, anywhere with our mobile and
                  web applications.
                </p>
                <div className="d-flex flex-wrap gap-3">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="btn btn-dark"
                  >
                    <FaMobileAlt className="me-2" />
                    App Store
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="btn btn-dark"
                  >
                    <FaMobileAlt className="me-2" />
                    Google Play
                  </motion.button>
                </div>
              </motion.div>
            </div>
            <div className="col-lg-6 order-lg-1">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="showcase-image"
              >
                <div className="img-placeholder"></div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section py-5 bg-light">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center fw-bold mb-5"
          >
            What Our Users Say
          </motion.h2>

          <div className="row g-4">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="col-md-4">
                <motion.div
                  whileHover={{ y: -5 }}
                  className="testimonial-card"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <FaQuoteLeft className="quote-icon" />
                  <p className="testimonial-text">"{testimonial.quote}"</p>
                  <div className="testimonial-author">{testimonial.author}</div>
                  <div className="testimonial-rating">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className={
                          i < testimonial.rating ? "star-filled" : "star-empty"
                        }
                      >
                        ★
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section py-5 text-white">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="display-5 fw-bold mb-4">
              Ready to Transform Your Health Journey?
            </h2>
            <p className="lead mb-5">
              Join thousands of users managing their health with Medisafe
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn btn-light btn-lg px-5"
            >
              Get Started Today
            </motion.button>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default HomeMain;
