import React from "react";
import { images } from "../constants";
import "../styles/Login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMaessage] = useState("");

  const navigate = useNavigate();

  const onLoginClicked = async () => {
    alert("Login not implemented");
  };

  return (
    <div className="main-login-container">
      <div className="login-form-container">
        <div className="login-header-box">
          <h1 className="logn-header">Login</h1>
          {errorMessage && <div className="error-msg">{errorMessage}</div>}
        </div>
        <div className="login-form">
          <form className="form">
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              placeholder="Email"
            />
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
            />
            <div className="forgot-password-box">
              <a
                onClick={() => navigate("/forgotpassword")}
                className="forgot-password"
                href="/forgotpassword"
              >
                Forgot password?
              </a>
            </div>
          </form>

          <a
            aria-disabled={!email || !password}
            onClick={onLoginClicked}
            className="login-btn"
            href="/dashboard"
          >
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
