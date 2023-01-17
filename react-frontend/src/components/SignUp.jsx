import React from "react";
import { images } from "../constants";
import "../styles/SignUp.css";

const SignUp = () => {
  return (
    <div className="main-signup-container">
      <div className="signup-form-container">
        <div className="signup-header-box">
          <h1 className="signup-header">Sign Up</h1>
        </div>
        <div className="signup-form">
          <form className="form">
            <input placeholder="Username" id="form-input" />
            <input placeholder="First Name" id="form-input" />
            <input placeholder="Last Name" id="form-input" />
            <input placeholder="Email" id="form-input" />
            <input type="password" placeholder="Password" id="form-input" />
          </form>

          <a className="signup-btn" href="/Dashboard">
            Sign Up
          </a>
        </div>
      </div>
      <div className="signup-image-container">
        <img className="signup-img" src={images.Signup} alt="Signup" />
      </div>
    </div>
  );
};

export default SignUp;
