import React from "react";
import { images } from "../constants";
import "../styles/Body.css";
// import HeroSection from "./HeroSection";

const Body = () => {
  return (
    <div className="main-body-container">
      <div className="body-image-box">
        <img
          className="body-image"
          src={images.CoordinationTwo}
          alt="body-img"
        />
      </div>

      <div className="body-text">
        <div className="body-header-box">
          <h1 className="body-header">Coordination</h1>
        </div>
        <div className="body-description-box">
          <div className="body-description">
            Job log exists to help you organize and coordinate your job
            application as you go on the job search journey. <br></br>
            Keeping track of the jobs and interviews you have had can help to
            track trends and habits that will help you as you progress through
            the ranks
          </div>
        </div>
      </div>

      <div className="body-text">
        <div className="body-header-box">
          <h1 className="body-header">Real-Time Connection</h1>
        </div>
        <div className="body-description-box">
          <p className="body-description">
            Job log seamlessly connects with popular job application platforms,
            ensuring you have all the information you need in one place.
            <br></br>
            With a single click, import your job applications and relevant
            details directly from these platforms.
          </p>
        </div>
        <div className="platform-list">
          <div className="platform">
            <img className="icon" src={images.LinkedIn} alt="LinkedIn Icon" />
          </div>
          <div className="platform">
            <img className="icon" src={images.Indeed} alt="Indeed Icon" />
          </div>
          <div className="platform">
            <img className="icon" src={images.Glasdoor} alt="Indeed Icon" />
          </div>
        </div>
      </div>

      <div className="body-image-box">
        <img
          className="body-image"
          src={images.CoordinationTwo}
          alt="body-img"
        />
      </div>
    </div>
  );
};

export default Body;
