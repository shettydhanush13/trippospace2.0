import React from 'react';
import './styles.scss';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import PageWrapper from '../pageWrapper';

const ContactUs = () => {
  return (
    <PageWrapper>
        <div className="contact-us">
            <div className="container">
                <h1>Contact Us</h1>
                <p>If you have any questions or inquiries, feel free to reach out to us:</p>
                <div className="contact-info">
                <p>Email: info@travelspace.com</p>
                <p>Phone: +123-456-7890</p>
                </div>
                <div className="social-media-links">
                <h2>Connect with Us</h2>
                <ul>
                    <li><a href="/"><FaFacebookF /></a></li>
                    <li><a href="/"><FaTwitter /></a></li>
                    <li><a href="/"><FaInstagram /></a></li>
                </ul>
                </div>
            </div>
        </div>
    </PageWrapper>
  );
};

export default ContactUs;
