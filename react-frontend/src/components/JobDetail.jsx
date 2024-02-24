import { React, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useJobApplication } from "../hooks";
import { Error, Loader } from "../common";
import { Document, Page } from "react-pdf";
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
import "../styles/JobDetail.css";

const JobDetail = () => {
  const { applicationId } = useParams();
  const { loading, error, application } = useJobApplication(applicationId);

  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
      return;
    }
  }, []);
  // handleEditApplication

  const handleEditApplication = async () => {
    try {
      await fetch(
        `http://localhost8080/api/user-applicaiton/${applicationId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
    } catch (error) {
      console.log(error);
      console.error(`Error updating application: ${error}`);
    }
  };

  //handleDelete
  const handleDeleteApplication = async () => {
    try {
      await fetch(
        `http://localhost:8080/api/user-application/${applicationId}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
      console.error(`Error deleting application: ${error}`);
    }
  };

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <Error />;
  }

  if (!application) {
    return <div>Application not found, try again!</div>;
  }

  const resumeDocs = [
    //     { uri: application.resumePath }, // Remote file
    application.resumePath && {
      uri: require(`/Users/timialabi/job_log-1/express-backend/uploads/${application.resumePath}`),
    },
  ].filter(Boolean);
  const coverLetterDocs = [
    //     { uri: application.resumePath }, // Remote file
    application.coverLetterPath && {
      uri: require(`/Users/timialabi/job_log-1/express-backend/uploads/${application.coverLetterPath}`),
    },
  ].filter(Boolean);

  return (
    <div className="main-jd-container">
      <div className="jd-header-box">
        <h1 className="jd-header">{application.jobTitle}</h1>
      </div>
      <div className="jd-detail-box">
        <h2 className="jd-company">Company</h2>
        <p className="jd-company-name">{application.company}</p>
        <h2 className="date-applied">Date Applied</h2>
        <p className="date-applied-info">{application.dateApplied}</p>
        <h2 className="interview-stage">Interview Stage</h2>
        <p className="interview-stage-info">
          {application ? application.interviewStage : ""}
        </p>
        <h2 className="interview-stage">Offer</h2>
        <p className="offer-info">{application ? application.offer : ""}</p>
        <h2 className="interview-stage">Documents</h2>
        <div className="document-container">
          <div className="document-box">
            {application.resumePath && (
              <>
                <h3 className="resume">Resume</h3>

                <DocViewer
                  className="document"
                  documents={resumeDocs}
                  pluginRenderers={DocViewerRenderers}
                  //   style={{ height: "50vh", width: "70%" }}
                />
              </>
            )}
          </div>
          <div className="document-box">
            {application.coverLetterPath && (
              <>
                <h3 className="coverletter">Cover Letter</h3>
                <DocViewer
                  className="document"
                  documents={coverLetterDocs}
                  pluginRenderers={DocViewerRenderers}

                  //   style={{ height: "50vh", width: "70%" }}
                />
              </>
            )}
          </div>
        </div>
        <h2 className="notes-header">Job Description</h2>
        <p className="job-desc">{application.jobDescription}</p>
        <h2 className="notes-header">Notes</h2>
        <p className="notes-details">{application.notes}</p>
      </div>
      <div className="jd-btn-box">
        <button className="edit-app-btn" onClick={handleEditApplication}>
          Edit this application
        </button>
        <button className="delete-app-btn" onClick={handleDeleteApplication}>
          Delete this Application
        </button>
      </div>
    </div>
  );
};

export default JobDetail;
