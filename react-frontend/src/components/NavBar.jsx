import React from "react";
import "../styles/Navbar.css";

const NavBar = () => {
  return (
    <div className="main-nav-container">
      <div className="logo-box">
        <a href="/" className="logo">
          JOBLOG
        </a>
      </div>

      <div className="nav-links-container">
        <li className="nav-link-list">
          <a className="nav-link" href="/">
            Home
          </a>
        </li>
        <li className="nav-link-list">
          <a className="nav-link" href="/Login">
            Dashboard
          </a>
        </li>
        <li className="nav-link-list">
          <a className="nav-link" href="/About">
            About
          </a>
        </li>
        <li className="nav-link-list">
          <a className="nav-link" href="/Login">
            Login
          </a>
        </li>
        <li className="nav-link-list">
          <a className="nav-link-signup" href="/SignUp">
            SignUp
          </a>
        </li>
      </div>
    </div>
  );
};

export default NavBar;
