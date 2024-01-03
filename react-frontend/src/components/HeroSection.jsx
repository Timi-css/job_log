import React from "react";
import { images } from "../constants";
import "../styles/HeroSection.css";
import Body from "./Body";

const HeroSection = () => {
  return (
    <div className="main-hero-container">
      <div className="hero-container">
        <div className="hero-header-box">
          <div className="hero-header-subbox">
            <h1 className="hero-header">
              Take Control of Your Job <br></br>
              <span className="hero-header-applications">Applications</span>
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
        </div>

        <div className="hero-image-box">
          <img className="hero-image" src={images.HeroTwo} alt="hero-img" />
        </div>
      </div>
      <Body />
    </div>
  );
};

export default HeroSection;
