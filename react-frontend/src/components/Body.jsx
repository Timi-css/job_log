import React from "react";
import { images } from "../constants";
import "../styles/Body.css";
// import HeroSection from "./HeroSection";

const Body = () => {
  return (
    <div className="main-body-container">
      <section className="features-section">
        <div className="features-header-box">
          <h2 className="features-header">
            AI Features that helps you focus <br></br> on the things that matter
          </h2>
          <p className="features-text">
            JOBLOG provides you with a range of features to help you optimize
            your job search
          </p>
        </div>
        <div className="features-card-box">
          <div className="feature-card">
            <div className="card-icon">
              <img className="card-image" src={images.Feature} alt="hero-img" />
            </div>
            <h3 className="card-header">Manage Applications</h3>
            <p className="card-text">
              JOBLOG allows you to manage applications seamlessly and allows you
              to focus on the things that matter the most to you
            </p>
            <a className="learn-more" href="/">
              Learn more
            </a>
          </div>
          {/* ================================================== */}
          <div className="feature-card">
            <div className="card-icon">
              <img className="card-image" src={images.AI} alt="hero-img" />
            </div>
            <h3 className="card-header">AI Applications</h3>
            <p className="card-text">
              JOBLOG allows you to manage applications seamlessly and allows you
              to focus on the things that matter the most to you
            </p>
            <a className="learn-more" href="/">
              Learn more
            </a>
          </div>
          {/* ================================================== */}
          <div className="feature-card">
            <div className="card-icon">
              <img className="card-image" src={images.Alarm} alt="hero-img" />
            </div>
            <h3 className="card-header">Reminder Emails</h3>
            <p className="card-text">
              JOBLOG allows you to manage applications seamlessly and allows you
              to focus on the things that matter the most to you
            </p>
            <a className="learn-more" href="/">
              Learn more
            </a>
          </div>
          {/* ================================================== */}
        </div>
      </section>
      <section className="time-section">
        <div className="time-box">
          <div className="time-image-box">
            <img
              className="time-image"
              src={images.Misc}
              alt="lady on a phone"
            />
          </div>
          {/* ================================================== */}
          <div className="time-misc-container">
            <div className="time-content-box">
              <h2 className="time-content-header">
                Save time managing your applictions
              </h2>
              <p className="time-content-paragraph">
                Many job seekers spend at least 65% of their time manageing and
                tracking their applications. Let JOBLOG do the hard work foor
                you.
              </p>
            </div>
            {/* ================================================== */}
            <div className="time-content-misc-box">
              <div className="time-content-misc">
                <img className="time-misc-img" src={images.Clock} alt="clock" />
                <h3 className="time-misc-header">Time Saving</h3>
                <p className="time-misc-text">
                  Save time with JOBLOG's automatic application logging and
                  <br></br>
                  focus on getting those leads
                </p>
              </div>
              <div className="time-content-misc">
                <img className="time-misc-img" src={images.Mail} alt="mail" />
                <h3 className="time-misc-header">Follow-Up Emails</h3>
                <p className="time-misc-text">
                  No need to worry about missing out on opportunities because
                  <br></br>
                  with our automated follow up email
                </p>
              </div>
            </div>
            {/* ================================================== */}
          </div>
        </div>
      </section>
      <section className="testimonial-section">
        <div className="testimonial-header-box">
          <h1 className="testimonial-title">Hear from our Users</h1>
        </div>
        <div className="testimonial-cards-container">
          <div className="testimonial-card-box">
            <div className="testimonial-profile-box">
              <img
                src={images.Diana}
                alt="user-profile"
                className="testimonial-img"
              />
              <div className="testimonial-profile-content">
                <h2 className="user-name">Diana</h2>
                <p className="user-job">Project Manager</p>
              </div>
            </div>
            <p className="testimonial-topic">Time and Cost Effective</p>
            <span className="user-details">
              I used JOBLOG for the first time a few weeks ago, since then I
              have been using it every day.It is an amazing app that helps me
              orgnanize my applications
            </span>
          </div>
          {/* ================================================== */}
          <div className="testimonial-card-box">
            <div className="testimonial-profile-box">
              <img
                src={images.Brydon}
                alt="user-profile"
                className="testimonial-img"
              />
              <div className="testimonial-profile-content">
                <h2 className="user-name">Brydon</h2>
                <p className="user-job">Project Manager</p>
              </div>
            </div>
            <p className="testimonial-topic">Time and Cost Effective</p>
            <span className="user-details">
              I used JOBLOG for the first time a few weeks ago, since then I
              have been using it every day.It is an amazing app that helps me
              orgnanize my applications
            </span>
          </div>
          {/* ================================================== */}
          <div className="testimonial-card-box">
            <div className="testimonial-profile-box">
              <img
                src={images.Preeti}
                alt="user-profile"
                className="testimonial-img"
              />
              <div className="testimonial-profile-content">
                <h2 className="user-name">Preeti</h2>
                <p className="user-job">Project Manager</p>
              </div>
            </div>
            <p className="testimonial-topic">Time and Cost Effective</p>
            <span className="user-details">
              I used JOBLOG for the first time a few weeks ago, since then I
              have been using it every day.It is an amazing app that helps me
              orgnanize my applications
            </span>
          </div>
          {/* ================================================== */}
          <div className="testimonial-card-box">
            <div className="testimonial-profile-box">
              <img
                src={images.John}
                alt="user-profile"
                className="testimonial-img"
              />
              <div className="testimonial-profile-content">
                <h2 className="user-name">John</h2>
                <p className="user-job">Project Manager</p>
              </div>
            </div>
            <p className="testimonial-topic">Time and Cost Effective</p>
            <span className="user-details">
              I used JOBLOG for the first time a few weeks ago, since then I
              have been using it every day.It is an amazing app that helps me
              orgnanize my applications
            </span>
          </div>
          {/* ================================================== */}
        </div>
      </section>
    </div>
  );
};

export default Body;
