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
            <a href="/Dashboard" className="footer-link">
              Dashboard
            </a>
          </li>
          <li className="footer-link-list">
            <a href="/About" className="footer-link">
              About
            </a>
          </li>
          <li className="footer-link-list">
            <a href="/Login" className="footer-link">
              Login
            </a>
          </li>
          <li className="footer-link-list">
            <a href="/Signup" className="footer-link-signup">
              SignUp
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
