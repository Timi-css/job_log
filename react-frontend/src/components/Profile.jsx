import React, { useEffect, useState } from "react";
import "../styles/Profile.css";
import { images } from "../constants";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
      return;
    }
    const useUrl = "http://localhost:8080/api/user";

    const fetchUserData = async () => {
      try {
        const response = await fetch(useUrl, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const responseJson = await response.json();
        console.log(`ResponseData: ${JSON.stringify(responseJson)}`);
        console.log(responseJson.user);
        if (response.ok) {
          const userData = await responseJson;
          setUser(userData.user);
        } else {
          console.error("Error getting user data");
        }
      } catch (error) {
        console.error(`Error: ${error.message}`);
      }
    };

    if (token) {
      fetchUserData();
    } else {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div className="main-profile-container">
      <section className="profile-header-section">
        <div className="profile-img-box">
          <img src={images.John} alt="user-profile" className="profile-img" />
        </div>
        <div className="profile-details">
          <h1 className="profile-name">
            {user ? user.firstName + " " + user.lastName : "User"}
          </h1>
          <p className="occupation">Software Engineer</p>
          <h2 className="bio-header">Bio</h2>
          <p className="bio">Software Engineer seeking entry level roles</p>
        </div>
      </section>
      <section className="contact-info-section">
        <div className="contact-info-header">
          <h2>Contact Information</h2>
          <button className="edit-button">Edit</button>
        </div>
        <div className="contact-info-body">
          <p className="contact-details">Email: {user ? user.email : ""} </p>
          <p className="contact-details">Phone: (000) 000 0000</p>
          <p className="contact-details">City: Calgary</p>
          <p className="contact-details">Province: Alberta</p>
          <p className="contact-details">Country: Canada</p>
        </div>
      </section>
      <section className="billing-info-section">
        <div className="billing-info-header">
          <h2>Billing Information</h2>
          <button className="edit-button">Edit</button>
        </div>
        <div className="billing-info-body">
          <p className="billing-details">
            Plan: Premium Plan (30-Day Free Trial)
          </p>
          <p className="billing-details">Card Holder: Dani Jones</p>
          <p className="billing-details">Card Number: **** **** **** 1234</p>
          <p className="billing-details">Expiry: 12/98</p>
          <p className="billing-details">CVV: ***</p>
        </div>
      </section>
      <section className="connected-platforms-section">
        <div className="connected-platforms-header">
          <h2>Connected Platforms</h2>
          <button className="edit-button">Edit</button>
        </div>
        <div className="connected-platforms-details">
          <p>LinkedIN</p>
          <p>Glassdoor</p>
          <p>Indeed</p>
        </div>
      </section>
      <section className="delete-profile-section">
        <></>
        <button className="delete-account-btn">Delete Account</button>
      </section>
    </div>
  );
};

export default Profile;
