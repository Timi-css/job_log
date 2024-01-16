import { FaBars, FaTimes } from "react-icons/fa";
import "../styles/Navbar.css";
import { images } from "../constants";
import { useRef } from "react";

const NavBar = () => {
  const navRef = useRef();

  const showNavBar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  return (
    <div className="main-nav-container">
      <div className="logo-box">
        <a href="/" className="logo">
          JOBLOG
        </a>
      </div>

      <nav ref={navRef} className="nav-links-container">
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
          <a className="nav-link" href="/login">
            Login
          </a>
        </li>
        <li className="nav-link-list">
          <a className="nav-link-signup" href="signup">
            SignUp
          </a>
        </li>
      </nav>

      <button className="nav-btn nav-close-btn" onClick={showNavBar}>
        <FaTimes />
      </button>
      <button className="nav-btn" onClick={showNavBar}>
        <FaBars />
      </button>
    </div>
  );
};

export default NavBar;
