import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import './styles.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__section">
          <h2 className="footer__title">Contact Us</h2>
          <p className="footer__contact-info">
            Address: #13, Travel Street, Bengaluru, India <br />
            Phone: +91 8971780778 <br />
            Email: info@trippospace.com
          </p>
        </div>
        <div className="footer__section">
          <h2 className="footer__title">Quick Links</h2>
          <ul className="footer__links">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer__section">
          <h2 className="footer__title">Follow Us</h2>
          <ul className="footer__social-links">
            <li><a href="/"><FaFacebookF /></a></li>
            <li><a href="/"><FaTwitter /></a></li>
            <li><a href="/"><FaInstagram /></a></li>
          </ul>
        </div>
      </div>
      <div className="footer__copyright">
        &copy; 2024 Trippospace. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
