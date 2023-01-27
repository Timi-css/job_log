import React from "react";
import "../styles/NewApplication.css";

const NewApplication = ({ show, cancel }) => {
  if (!show) {
    return <></>;
  }

  return (
    <div className="main-container">
      <div className="new-app-box">
        <form className="new-app-form">
          <input placeholder="Job Title" type="text" />
          <input placeholder="Company" type="text" />
          <input placeholder="Date applied" type="date" />
          <input placeholder="Interview" type="text" />
          <input placeholder="Offer" type="text" />
          <input placeholder="Resume" type="file" />
          <input placeholder="Cover letter" type="file" />
          <div className="btn-box">
            <button className="cancel-btn" onClick={cancel}>
              Cancel
            </button>
            <button className="save-btn">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewApplication;
