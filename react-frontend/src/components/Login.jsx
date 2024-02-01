import React from "react";
import { images } from "../constants";
import "../styles/Login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import useApi from "../hooks/useApi";
import { Error } from "../common";

const Login = () => {
  const navigate = useNavigate();
  const url = "http://localhost:8080/api/login";
  const { loading, setLoading, error: apiError } = useApi(url);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  //   Handle Login Function
  const handleLogin = async (e) => {
    e.preventDefault();
    console.log("Handle Login Started");

    if (!email || !password) {
      setError("Feilds cannot be empty");
      return;
    }
    try {
      setLoading(true);
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/JSON",
        },
        body: JSON.stringify({ email, password }),
      });
      console.log("We got here");
      console.log(response);
      if (response.status === 200) {
        const data = await response.json();
        const token = data.data;
        localStorage.setItem("token", token);
        console.log("Login Successful: ", data);
        navigate("/dashboard");
      } else {
        const data = await response.json();
        setError(data.message, "An error occured during login");
      }
    } catch (error) {
      setError("Invalid email or password");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="main-login-container">
      <div className="login-form-container">
        <div className="login-header-box">
          <h1 className="logn-header">Login</h1>
        </div>
        <div className="login-form">
          <form className="form" onSubmit={handleLogin}>
            <input
              id="form-input"
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              id="form-input"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="forgot-password-box">
              <a className="forgot-password" href="/forgotpassword">
                Forgot password??
              </a>
            </div>
            {loading && <p>Loading...</p>}
            {apiError && <Error message={apiError} />}
            {error && <Error message={error} />}
            <button type="submit" className="login-btn">
              Login
            </button>
          </form>

          {/* ============================================== */}
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
