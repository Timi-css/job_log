import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Error } from "../common";
import useApi from "../hooks/useApi";
import { useJobApplication } from "../hooks";
import "../styles/NewApplication.css";

const EditApplicationForm = ({ show, cancel }) => {
  const navigate = useNavigate();
  const applicationId = useParams();
  const { error, application } = useJobApplication(applicationId);
  console.log(applicationId.applicationId, "<=======APP ID HERE");
  const url = `http://localhost:8080/api/user-applicaiton/${applicationId.applicationId}`;
  console.log("URL======> ", url);

  const { loading, setLoading } = useApi(url);

  const [formData, setFormData] = useState({
    jobTitle: "",
    company: "",
    dateApplied: "",
    resumePath: null,
    coverLetterPath: null,
    interviewStage: "",
    offerStatus: "",
    jobDescription: "",
    notes: "",
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === "file" ? files[0] : value,
    });
  };

  const [localError, setLocalError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const requiredFields = [
      "jobTitle",
      "company",
      "dateApplied",
      "resumePath",
      "coverLetterPath",
      "interviewStage",
      "offerStatus",
      "jobDescription",
      "notes",
    ];
    const emptyField = requiredFields.find((field) => !formData[field]);

    if (emptyField) {
      setLocalError(`Please fill in the missing field(s)`);
      return;
    }

    try {
      setLoading(true);
      const token = localStorage.getItem("token");

      const form = new FormData();
      for (const key in formData) {
        form.append(key, formData[key]);
      }
      console.log("FORM  DATA: ", form);
      const response = await fetch(url, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: form,
      });

      if (response.ok) {
        console.log("New Application Created - Success");
        console.log("Reloading  page...");
        // document.location.reload();
        // navigate("/dashboard");
      } else {
        console.error("Error saving new application");
      }
    } catch (error) {
      console.error("Error:", error.message);
    } finally {
      setLoading(false);
    }
  };

  if (!show) {
    return <></>;
  }

  return (
    <div className="main-container">
      <div className="new-app-box">
        <form className="new-app-form" onSubmit={handleSubmit}>
          <input
            placeholder="Job Title"
            type="text"
            name="jobTitle"
            value={formData.jobTitle}
            onChange={handleChange}
          />
          <input
            placeholder="Company"
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
          />
          <input
            placeholder="Date applied"
            type="date"
            name="dateApplied"
            value={formData.dateApplied}
            onChange={handleChange}
          />
          <input
            placeholder="Interview Stage"
            type="text"
            name="interviewStage"
            value={formData.interviewStage}
            onChange={handleChange}
          />
          <input
            placeholder="Offer Status"
            type="text"
            name="offerStatus"
            value={formData.offerStatus}
            onChange={handleChange}
          />
          <input
            placeholder="Resume"
            type="file"
            name="resumePath"
            onChange={handleChange}
          />
          <input
            placeholder="Cover letter"
            type="file"
            name="coverLetterPath"
            onChange={handleChange}
          />
          <input
            placeholder="Job description"
            type="text"
            name="jobDescription"
            value={formData.jobDescription}
            onChange={handleChange}
          />
          <input
            placeholder="Notes"
            type="text"
            name="notes"
            value={formData.notes}
            onChange={handleChange}
          />
          {loading && <p>Loading...</p>}
          {localError && <Error message={localError} />}
          <div className="btn-box">
            <button className="cancel-btn" onClick={cancel}>
              Cancel
            </button>
            <button className="save-btn" type="submit">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditApplicationForm;
