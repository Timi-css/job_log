import React from "react";
import { images } from "../constants";
import "../styles/SignUp.css";
import { useToken } from "../auth/useToken";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUp = (props) => {
  const [errorMessage, setErrorMaessage] = useState("");
  const [token, setToken] = useToken();

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const onSignUpClicked = async () => {
    alert("sign up clicked");
    const response = await axios.post("/api/signup", {
      email: email,
      password: password,
      username: username,
      firstName: firstName,
      lastName: lastName,
    });
    const { token } = response.data;
    setToken(token);
    navigate("/dashboard");
  };

  return (
    <div className="main-signup-container">
      <div className="signup-form-container">
        <div className="signup-header-box">
          <h1 className="signup-header">Sign Up</h1>
        </div>
        <div className="signup-form">
          <form className="form">
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              id="form-input"
            />
            <input
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="First Name"
              id="form-input"
            />
            <input
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Last Name"
              id="form-input"
            />
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              id="form-input"
            />
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
              id="form-input"
            />
          </form>

          <a
            aria-disabled={!email || !password}
            onClick={onSignUpClicked}
            className="signup-btn"
            href="/login"
          >
            Sign Up
          </a>
        </div>
      </div>
      <div className="signup-image-container">
        <div className="signup-image-box">
          <img className="signup-img" src={images.Signup} alt="Signup" />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
