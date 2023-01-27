import React from "react";
import { useState } from "react";
import "../styles/Navbar.css";
import SignUp from "./SignUp";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

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
          <a className="nav-link" href="/Dashboard">
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
          <a className="nav-link-signup" href="Signup">
            SignUp
          </a>
        </li>
      </div>
    </div>
  );
};

export default NavBar;
