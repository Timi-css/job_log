import React, { useState } from "react";
import { images } from "../constants";
import "../styles/SignUp.css";
import useApi from "../hooks/useApi";
import { useNavigate } from "react-router-dom";
import { Error } from "../common";

const SignUp = () => {
  const navigate = useNavigate();
  const url = "http://localhost:8080/api/signup";
  const { loading, error, setLoading } = useApi(url);

  const [formData, setFormData] = useState({
    applicationId: "",
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok === false) {
        console.log(response.ok);
        const responseData = await response.json();
        if (responseData === "User Exists") {
          // Handle username existence error
          console.error("Error: User already exists");
          // Set an error state or display a message to the user
        } else {
          // Handle other errors
          console.error("Error:", responseData.error);
        }
      } else {
        // Signup successful, you may redirect or perform other actions
        const responseData = await response.json();
        console.log("Signup Successful:", responseData);
      }
    } catch (error) {
      console.error("Error:", error.message);
    } finally {
      setLoading(false);
      navigate("/login");
    }
  };

  return (
    <div className="main-signup-container">
      <div className="signup-form-container">
        <div className="signup-header-box">
          <h1 className="signup-header">Sign Up</h1>
        </div>
        <div className="signup-form">
          <form className="form" onSubmit={handleSubmit}>
            <input
              placeholder="ApplicationID"
              id="form-input"
              name="applicationId"
              type="text"
              value={formData.applicationId}
              onChange={handleChange}
            />
            <input
              placeholder="Username"
              id="form-input"
              name="username"
              type="text"
              value={formData.username}
              onChange={handleChange}
            />
            <input
              placeholder="First Name"
              id="form-input"
              name="firstName"
              type="text"
              value={formData.firstName}
              onChange={handleChange}
            />
            <input
              placeholder="Last Name"
              id="form-input"
              name="lastName"
              type="text"
              value={formData.lastName}
              onChange={handleChange}
            />
            <input
              placeholder="Email"
              id="form-input"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="Password"
              id="form-input"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            {loading && <p>Loading...</p>}
            {error && error}
            <button type="submit" className="signup-btn">
              Sign Up
            </button>
          </form>
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
