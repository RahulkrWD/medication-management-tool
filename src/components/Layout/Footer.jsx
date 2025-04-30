import React from "react";
import "../../styles/Footer.css";
import {
  FaApple,
  FaGooglePlay,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="container py-5">
        <div className="row g-4">
          {/* Get Medisafe Section */}
          <div className="col-md-3">
            <div className="footer-section">
              <h5 className="footer-heading">Get Medisafe (Free)</h5>
              <div className="d-flex flex-column gap-2">
                <button className="store-btn animate__animated animate__pulse animate__infinite">
                  <FaApple size={24} /> Apple App Store
                </button>
                <button className="store-btn animate__animated animate__pulse animate__infinite">
                  <FaGooglePlay size={24} /> Google Play
                </button>
                <a href="#" className="web-portal-link">
                  Web Portal login
                </a>
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div className="col-md-3">
            <div className="footer-section">
              <h5 className="footer-heading">Features</h5>
              <ul className="footer-list">
                <li>
                  <a href="#">Medication Management</a>
                </li>
                <li>
                  <a href="#">Family Tracking</a>
                </li>
                <li>
                  <a href="#">Measurement Trackers</a>
                </li>
                <li>
                  <a href="#">Drug Interactions</a>
                </li>
                <li>
                  <a href="#">Refill Reminders</a>
                </li>
                <li>
                  <a href="#">Appointment Reminders</a>
                </li>
                <li>
                  <a href="#">Condition Resources</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Community Section */}
          <div className="col-md-2">
            <div className="footer-section">
              <h5 className="footer-heading">Community</h5>
              <ul className="footer-list">
                <li>
                  <a href="#">Compare Adherence</a>
                </li>
                <li>
                  <a href="#">Become an Ambassador</a>
                </li>
                <li>
                  <a href="#">Join Beta Group</a>
                </li>
                <li>
                  <a href="#">See Reviews</a>
                </li>
              </ul>
            </div>
          </div>

          {/* More on Medisafe Section */}
          <div className="col-md-2">
            <div className="footer-section">
              <h5 className="footer-heading">More on Medisafe</h5>
              <ul className="footer-list">
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Help Center</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Offices Section */}
          <div className="col-md-2">
            <div className="footer-section">
              <h5 className="footer-heading">Offices</h5>
              <div className="office-info">
                <h6>India</h6>
                <p>Banglore, KA</p>
                <p>{888} 888-8888</p>

                <h6 className="mt-3">India</h6>
                <p>West Bengal, Kolkata</p>
                <p>Kolkata, salt lake 700102</p>
                <a href="mailto:support@medisafe.com">support@support.com</a>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media and Bottom Links */}
        <div className="row mt-5">
          <div className="col-md-6">
            <div className="social-icons">
              <a href="#">
                <FaFacebook className="social-icon" />
              </a>
              <a href="#">
                <FaTwitter className="social-icon" />
              </a>
              <a href="#">
                <FaInstagram className="social-icon" />
              </a>
              <a href="#">
                <FaLinkedin className="social-icon" />
              </a>
            </div>
          </div>
          <div className="col-md-6 text-md-end">
            <div className="footer-bottom-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms and Conditions</a>
              <a href="#">Consumer Health Data Policy</a>
            </div>
            <p className="copyright">© MedisafeApp. All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
