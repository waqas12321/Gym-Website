import React from 'react';
import facebookLogo from '../assets/images/facebook-logo.png';
import instaLogo from '../assets/images/insta-logo.webp';
import twitterLogo from '../assets/images/twitter-logo.png';

const Footer = () => {
  return (
    <footer className="text-white mt-5 pt-4 pb-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.85)' }}>
      <div className="container">
        <div className="row">
          {/* Social Icons */}
          <div className="col-md-4 mb-4">
  <h4 style={{marginBottom: '20px'}}>Social Icons</h4>
  <div className="d-flex flex-column align-items-start">
    <a href="https://www.facebook.com/" className="mb-4"><img src={facebookLogo} alt="Facebook" style={{ height: 30, width: 30 }} /></a>
    <a href="https://www.instagram.com/" className="mb-4"><img src={instaLogo} alt="Instagram" style={{ height: 30, width: 30 }} /></a>
    <a href="https://twitter.com/"><img src={twitterLogo} alt="Twitter" style={{ height: 30, width: 30 }} /></a>
  </div>
</div>


          {/* Quick Links */}
          <div className="col-md-4 mb-4">
          <h4 style={{ marginBottom: '20px' }}>Quick Links</h4>
            <ul className="list-unstyled">
              <li><a href="#" style={{ color: '#B7B7B7' }} className="d-block mt-2">Home</a></li>
              <li><a href="#" style={{ color: '#B7B7B7' }} className="d-block mt-2">About Us</a></li>
              <li><a href="#" style={{ color: '#B7B7B7' }} className="d-block mt-2">Services</a></li>
              <li><a href="#" style={{ color: '#B7B7B7' }} className="d-block mt-2">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-4 mb-4">
            <h4 style={{ marginBottom: '20px' }}>Contact Info</h4>
            <p style={{ color: '#B7B7B7' }} className="d-block mt-2">Address: 123 Main Street, City, Country</p>
            <p style={{ color: '#B7B7B7' }} className="d-block mt-2">Phone: +123-456-7890</p>
            <p style={{ color: '#B7B7B7' }} className="d-block mt-2">Email: info@example.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
