import React, { useState } from "react";
import { images } from "../constants";
import "../styles/SignUp.css";
import useApi from "../hooks/useApi";
import { useNavigate } from "react-router-dom";
import { Error, Loader } from "../common";

const SignUp = () => {
  const navigate = useNavigate();
  const url = "http://localhost:8080/api/signup";
  const { loading, setLoading } = useApi(url);

  const [formData, setFormData] = useState({
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const [localError, setLocalError] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const requiredFields = [
      "username",
      "firstName",
      "lastName",
      "email",
      "password",
    ];
    const emptyField = requiredFields.find((field) => !formData[field]);

    if (emptyField) {
      console.log("Empty fields");
      setLocalError(`Please fill in the missing field(s)`);
    }

    try {
      setLoading(true);
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      console.log("RESPONSE HERE: ", response.status);
      if (response.status === 200) {
        // Handle successful response
        const responseData = await response.json();
        console.log("Succesful Signup", responseData);
        navigate("/login");
        console.log("HERE ", response.status);
      } else {
        // Handle errors for non-successful responses
        // const responseData = await response.json();
        if (response.status === 409) {
          // Handle username existence error
          console.error("Error: User already exists");
          alert("User Exists");
        } else {
          // Handle other errors
          console.error("Error:", response.status);
        }
      }
    } catch (error) {
      console.error("Error:", error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="main-signup-container">
      <div className="signup-form-container">
        <div className="signup-header-box">
          <a href="/" className="logo">
            JOBLOG
          </a>
          <h1 className="signup-header">Sign Up</h1>
        </div>
        <div className="signup-form">
          <form className="form" onSubmit={handleSubmit}>
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
            {loading && <Loader />}
            {localError && <Error message={localError} />}
            <button type="submit" className="signup-btn">
              Sign Up
            </button>
            or
            <button type="submit" className="signup-google-btn">
              Sign up with Google
            </button>
            <span className="signup-login">
              Already have an account?{" "}
              <a className="signup-login" href="/login">
                Login
              </a>
            </span>
          </form>
        </div>
      </div>
      <div className="signup-image-container">
        <img className="signup-img" src={images.Signup} alt="Signup" />
        <h2 className="image-text">
          {" "}
          Join millions of users to simplify the job search process
        </h2>
      </div>
    </div>
  );
};

export default SignUp;
