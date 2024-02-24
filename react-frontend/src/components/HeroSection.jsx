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
              Elevate your job search with our <br></br>innovative platform!
              {/* <span className="hero-header-applications">Applications</span> */}
            </h1>

            <div className="cta-button-box">
              <a className="cta-button" href="/Signup">
                Get Started
              </a>
              <a className="cta-button-two" href="/">
                Learn more
              </a>
            </div>
          </div>
        </div>

        <div className="hero-image-box">
          <img className="hero-image" src={images.Hero} alt="hero-img" />
        </div>
      </div>
      <Body />
    </div>
  );
};

export default HeroSection;
