import "./Footer.css";
import ALMSLogo from "../assets/Academy.png";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Footer Content */}
      <section className="footer-content">
        <div className="footer-grid">
          <div className="footer-col footer-brand">
            <img
              src={ALMSLogo}
              alt="Arravo Academy Logo"
              className="footer-logo"
            />
            <p className="brand-description">
              Empowering learners with innovative education solutions and
              comprehensive course management tools.
            </p>
            <p className="live-session">
              Join our live sessions every weekday at 3PM WAT
            </p>
          </div>

          <div className="footer-col">
            <h4>Courses</h4>
            <ul>
              <li>
                <a href="#browse-courses">Browse Courses</a>
              </li>
              <li>
                <a href="#my-learning">My Learning</a>
              </li>
              <li>
                <a href="#certificates">Certificates</a>
              </li>
              <li>
                <a href="#instructors">Become an Instructor</a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <a href="#about">About Us</a>
              </li>
              <li>
                <a href="#blog">Blog</a>
              </li>
              <li>
                <a href="#support">Support Center</a>
              </li>
              <li>
                <a href="#contact">Contact Us</a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Connect With Us</h4>
            <ul>
              <li>
                <a href="#facebook">Facebook</a>
              </li>
              <li>
                <a href="#twitter">Twitter</a>
              </li>
              <li>
                <a href="#linkedin">LinkedIn</a>
              </li>
              <li>
                <a href="#instagram">Instagram</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            Copyright © 2025 Arravo Academy. All rights reserved.
          </p>
          <div className="footer-links">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
            <a href="#cookies">Cookie Policy</a>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
