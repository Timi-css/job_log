import React from "react";
import { images } from "../constants";
import "../styles/Login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  return (
    <div className="main-login-container">
      <div className="login-form-container">
        <div className="login-header-box">
          <h1 className="logn-header">Login</h1>
        </div>
        <div className="login-form">
          <form className="form">
            <input type="text" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <div className="forgot-password-box">
              <a className="forgot-password" href="/forgotpassword">
                Forgot password?
              </a>
            </div>
          </form>

          <a className="login-btn" href="/dashboard">
            Login
          </a>
          <a className="login-google-btn" href="/Dashboard">
            <img className="google" src={images.Google} alt="google" />
            Login with Google
          </a>
        </div>
      </div>
      <div className="login-image-container">
        <div className="login-image-box">
          <img className="login-img" src={images.Login} alt="Login" />
        </div>
      </div>
    </div>
  );
};

export default Login;
