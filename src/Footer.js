import React from 'react';
import './Footer.css';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="Footer">
      <div className="footer-left">
        <span className="footer-brand">Bookstore</span>
      </div>
      <div className="footer-center">
        <a href="/book/1">Get Started</a>
        <a href="/book/2">Policy</a>
        <a href="/book/3">Documentation</a>
      </div>
      <div className="footer-right">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook className="footer-icon" /></a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter className="footer-icon" /></a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram className="footer-icon" /></a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin className="footer-icon" /></a>
      </div>
    </footer>
  );
}
