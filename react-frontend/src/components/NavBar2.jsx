import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function NavBar2() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const updateIsLoggedIn = (newValue) => {
    setIsLoggedIn(newValue);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token === null || token === "") {
      setIsLoggedIn(false);
    } else {
      setIsLoggedIn(!!token);
    }
  }, []);

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/");
  };

  // ===========================================//

  return (
    <div>
      {isLoggedIn ? (
        <NavLoggedIn
          handleLogout={handleLogout}
          updateIsLoggedIn={updateIsLoggedIn}
        />
      ) : (
        <NavLoggedOut updateIsLoggedIn={updateIsLoggedIn} />
      )}
    </div>
  );
}

const NavLoggedIn = ({ handleLogout, updateIsLoggedIn }) => {
  // ===================================================================//
  const navRef = useRef();
  return (
    <div className="main-nav-container">
      <div className="logo-box">
        <Link to="/" className="logo">
          JOBLOG
        </Link>
      </div>
      <nav ref={navRef} className="nav-links-container">
        <div className="nav-links-container">
          <li className="nav-link-list">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-link-list">
            <Link className="nav-link" to="/dashboard">
              Dashboard
            </Link>
          </li>

          <li className="nav-link-list">
            <Link
              className="nav-link-signup"
              to="/"
              onClick={() => {
                handleLogout();
                updateIsLoggedIn(false);
              }}
            >
              Log out
            </Link>
          </li>
        </div>
      </nav>
    </div>
  );
};

const NavLoggedOut = ({ updateIsLoggedIn }) => {
  const navRef = useRef();
  return (
    <div className="main-nav-container">
      <div className="logo-box">
        <Link to="/" className="logo">
          JOBLOG
        </Link>
      </div>

      <nav ref={navRef} className="nav-links-container">
        <li className="nav-link-list">
          <Link className="nav-link" to="/">
            Home
          </Link>
        </li>

        <li className="nav-link-list">
          <Link className="nav-link" to="/about">
            About
          </Link>
        </li>
        <li className="nav-link-list">
          <Link className="nav-link" to="/">
            Features
          </Link>
        </li>
        <li className="nav-link-list">
          <Link className="nav-link-login" to="login">
            Login
          </Link>
        </li>
        <li className="nav-link-list">
          <Link className="nav-link-signup" to="signup">
            SignUp
          </Link>
        </li>
      </nav>
    </div>
  );
};

export default NavBar2;
