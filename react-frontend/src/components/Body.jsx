import React from "react";
import { images } from "../constants";
import "../styles/Body.css";
import HeroSection from "./HeroSection";

const Body = () => {
  return (
    <div className="main-body-container">
      <div className="body-image-box">
        <img className="body-image" src={images.Coordination} alt="body-img" />
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
    </div>
  );
};

export default Body;
