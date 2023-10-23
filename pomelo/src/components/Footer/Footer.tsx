import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div className="site-maping">
          <div className="site-links">
            <h3>Learn More</h3>
            <Link className="link" to="/">
              Home
            </Link>
            <Link className="link" to="/faq">
              FAQs
            </Link>
            <Link className="link" to="/about">
              About
            </Link>
          </div>
          <div className="site-links">
            <h3>Support</h3>
            <Link className="link" to="/contactus">
              Contact Us
            </Link>
            <Link className="link" to="/careers">
              Careers
            </Link>
          </div>
          <div className="site-links">
            <h3>Social</h3>
            <a>Instagram</a>
            <a>Twitter</a>
            <a>Facebook</a>
          </div>
          <div className="site-links">
            <h3>Get the app</h3>
            <button className="f-btn">Play Store</button>
            <button className="f-btn">App Store</button>
          </div>
        </div>
        <div className="footer-texts">
          <p style={{fontSize:"13px"}}>221 Main Street, Suite 770, San Francisco, CA 94105</p>
          <p style={{fontSize:"13px"}}>
            Banking services are provided by Coastal Community Bank, Member
            FDIC, and are subject to the terms of a Cardholder Agreement. The
            Pomelo Card is issued by Coastal Community Bank pursuant to a
            license from Mastercard International and may be used everywhere
            Mastercard is accepted. Pomelo, Inc. is a technology services
            provider and administrator of the card program.
          </p>
          <h3 style={{fontSize:"13px"}}>Pomelo Privacy Policy</h3>
          <h3 style={{fontSize:"13px"}}>Coastal Community Bank Privacy Policy</h3>
          <h3 style={{fontSize:"13px"}}>Pomelo Account Card Holder Agreement</h3>
          <h3 style={{fontSize:"13px"}}>©2023 Pomelo</h3>
        </div>
      </div>
    </>
  );
};

export default Footer;
