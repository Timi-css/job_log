import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <div className="main-footer-container">
      <div className="logo-box">
        <a href="/" className="footer-logo">
          JOBLOG
        </a>
      </div>
      <div className="footer">
        <div className="footer-link-box">
          <li className="footer-link-list">
            <a href="/" className="footer-link">
              Home
            </a>
          </li>
          <li className="footer-link-list">
            <a href="/dashboard" className="footer-link">
              Dashboard
            </a>
          </li>
          <li className="footer-link-list">
            <a href="/about" className="footer-link">
              About
            </a>
          </li>
          <li className="footer-link-list">
            <a href="/login" className="footer-link">
              Login
            </a>
          </li>
          <li className="footer-link-list">
            <a href="/signup" className="footer-link-signup">
              Sign Up
            </a>
          </li>
        </div>
        <div className="copyright-box">
          <p className="copyright"> &copy; Copyright 2023</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
