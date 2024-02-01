/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useEffect, useState } from "react";
import "../styles/Dashboard.css";
import { RiEditBoxLine, RiDeleteBin6Line } from "react-icons/ri";
import "./NewApplication";
import NewApplication from "./NewApplication";
import { Table } from "react-bootstrap";
import useUserApplication from "../hooks/useUserApplication";
import useApi from "../hooks/useApi";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [showNewAppBox, setShowNewAppBox] = useState(false);
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  const {
    loading: userLoading,
    data: userData,
    error: userError,
  } = useUserApplication();
  const {
    loading: appLoading,
    data: applications,
    error: appError,
  } = useUserApplication();

  console.log("DATA HERE: ", applications);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
      return;
    }
    const userUrl = "http://localhost:8080/api/user"; // Replace with your user endpoint

    // Fetch user data
    const fetchUserData = async () => {
      try {
        const response = await fetch(userUrl, {
          headers: {
            Authorization: `Bearer ${token}`, // Include the token in the headers
          },
        });
        const responseJson = await response.json();

        if (response.ok) {
          const userData = await responseJson;
          setUser(userData.user);
        } else {
          // Handle error cases
          console.error("Error fetching user data");
        }
      } catch (error) {
        console.error("Error:", error.message);
      }
    };

    if (token) {
      fetchUserData(); // Call the fetchUserData function if the token is available
    } else {
      // Handle case where token is not available
      navigate("/login"); // Redirect to the login page
    }
  }, [navigate]);

  const cancel = () => {
    setShowNewAppBox(false);
  };

  //   useEffect(() => {
  //     setLoading(true);
  //   }, [setLoading]);
  if (userLoading || appLoading) {
    return <p>Loading...</p>;
  }

  if (userError || appError) {
    console.error("Error:", userError || appError);
    return <p>Error fetching data</p>;
  }
  return (
    <div className="main-dashboard-container">
      <div>
        <div className="dash-header-box">
          <h1 className="dash-header">Hello {user ? user.username : "User"}</h1>
        </div>

        <div className="new-app-container">
          <div className="new-app">
            <a
              className="new-app-btn"
              onClick={() => {
                setShowNewAppBox(true);
              }}
              href=""
            >
              Add new application +{" "}
            </a>
          </div>
        </div>

        <div className="app-table-container">
          <Table className="app-table">
            <thead>
              <tr className="app-tr">
                <th className="app-th">Job Title</th>
                <th className="app-th">Company</th>
                <th className="app-th">Date applied</th>
                <th className="app-th">Interview</th>
                <th className="app-th">Offer</th>
                <th className="app-th">Resume</th>
                <th className="app-th">Cover letter</th>
              </tr>
            </thead>
            <tbody>
              {applications.map((app) => (
                <tr className="app-tr">
                  <td className="app-td">{app.jobTitle}</td>
                  <td className="app-td">{app.company}</td>
                  <td className="app-td">{app.dateApplied}</td>
                  <td className="app-td">Final stage</td>
                  <td className="app-td">Accepted</td>
                  <td className="app-td">{app.resume}</td>
                  <td className="app-td">{app.coverLetter}</td>
                  <div className="icons-box">
                    <RiEditBoxLine className="edit-btn" />
                    <RiDeleteBin6Line className="delete-btn" />
                  </div>
                </tr>
              ))}
            </tbody>
          </Table>
          <NewApplication
            show={showNewAppBox}
            title="new application?"
            cancel={cancel}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
