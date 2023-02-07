import React from "react";
import { useState } from "react";
import "../styles/NavBar2.css";
import SignUp from "./SignUp";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="main-nav2-container">
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
          <a className="nav-link" href="/dashboard">
            Dashboard
          </a>
        </li>
        <li className="nav-link-list">
          <a className="nav-link" href="/about">
            About
          </a>
        </li>

        <li className="nav-link-list">
          <a className="nav-link-signup" href="/">
            Log out
          </a>
        </li>
      </div>
    </div>
  );
};

export default NavBar;
