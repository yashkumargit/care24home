import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-brand">
          <h3>care24</h3>
          <p>World Class Cares at Home</p>
          <p>Now be stress-free. Care24 is here to take care of your loved ones.</p>
          <p>Contact Us: <p>+91 08069048802 | support@care24.co.in</p></p>
          <div className="social-icons">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-youtube"></i>
          </div>
        </div>

        <div className="vertical-line"></div>

        <div className="footer-section">
          <h4>Company</h4>
          <ul>
            <li>About Us</li>
            <li>Blogs</li>
            <li>News</li>
            <li>Careers</li>
            <li>FAQs</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Services</h4>
          <ul>
            <li>Our Caregivers</li>
            <li>Attendant Services</li>
            <li>Nursing Services</li>
            <li>Elderly Care</li>
            <li>Doctor at Home</li>
            <li>Physiotherapist</li>
            <li>Rehabilitation at Home</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Location</h4>
          <ul>
            <li>Mumbai</li>
            <li>Thane</li>
            <li>New Mumbai</li>
            <li>Delhi</li>
            <li>Noida</li>
            <li>Gurgaon</li>
            <li>Faridabad</li>
            <li>Ghaziabad</li>
            <li>Bangalore</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Care for</h4>
          <ul>
            <li>Arthritis</li>
            <li>Cancer</li>
            <li>Dementia</li>
            <li>Diabetes</li>
            <li>Stroke</li>
            <li>Alzheimer's Disease</li>
            <li>Cardiovascular Disease</li>
            <li>Traumatic Brain Injury</li>
            <li>Parkinson’s Disease</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Helpful Links</h4>
          <ul>
            <li>Term & Conditions</li>
            <li>Privacy Policy</li>
            <li>Payment Policy</li>
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        <p>&copy; 2023 Care24 Pvt Ltd. All rights reserved</p>
      </div>

      <a href="https://wa.me/916291903802" className="whatsapp-float" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-whatsapp"></i>
      </a>
    </footer>
  );
};

export default Footer;
