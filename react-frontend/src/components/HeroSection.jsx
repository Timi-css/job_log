import React from "react";
import { images } from "../constants";
import "../styles/HeroSection.css";

const HeroSection = () => {
  return (
    <div className="main-hero-container">
      <div className="hero-container">
        <div className="hero-header-box">
          <h1 className="hero-header">
            Organize your <br></br>
            <span className="hero-header-applications">applications</span>
          </h1>
          <p className="hero-description">
            Allow job log to do the work of sorting your job applications for
            you. <br></br>Get started for free today
          </p>
          <div className="cta-button-box">
            <a className="cta-button" href="/Signup">
              Get Started
            </a>
          </div>
        </div>

        <div className="hero-image-box">
          <img className="hero-image" src={images.Hero} alt="hero-img" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
