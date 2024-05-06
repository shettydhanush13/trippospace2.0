import React from 'react';
import './styles.scss';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h3>Categories</h3>
          <ul>
            <li><a href="/">Men</a></li>
            <li><a href="/">Women</a></li>
            <li><a href="/">Kids</a></li>
            <li><a href="/">Accessories</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Information</h3>
          <ul>
            <li><a href="/">About Us</a></li>
            <li><a href="/">Contact Us</a></li>
            <li><a href="/">Privacy Policy</a></li>
            <li><a href="/">Terms & Conditions</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Customer Service</h3>
          <ul>
            <li><a href="/">Shipping & Returns</a></li>
            <li><a href="/">FAQs</a></li>
            <li><a href="/">Size Guide</a></li>
            <li><a href="/">Track Order</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Trippospace Travel Solutions Pvt Ltd. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
