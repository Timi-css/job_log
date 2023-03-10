import React from "react";
import "../styles/Dashboard.css";
import { RiEditBoxLine, RiDeleteBin6Line } from "react-icons/ri";
import "./NewApplication";
import NewApplication from "./NewApplication";
import { useState } from "react";
import { Table } from "react-bootstrap";

const Dashboard = () => {
  const [showNewAppBox, setShowNewAppBox] = useState(false);
  const cancel = () => {
    setShowNewAppBox(false);
  };

  return (
    <div className="main-dashboard-container">
      <div className="dash-header-box">
        <h1 className="dash-header">Hello, Timi</h1>
      </div>

      <div className="new-app-container">
        <div className="new-app">
          <a
            className="new-app-btn"
            onClick={() => {
              setShowNewAppBox(true);
            }}
          >
            Add new application +{" "}
          </a>
        </div>
      </div>

      <div className="app-table-container">
        <Table className="app-table">
          <tr className="app-tr">
            <th className="app-th">Job Title</th>
            <th className="app-th">Company</th>
            <th className="app-th">Date applied</th>
            <th className="app-th">Interview</th>
            <th className="app-th">Offer</th>
            <th className="app-th">Resume</th>
            <th className="app-th">Cover letter</th>
          </tr>
          <tr className="app-tr">
            <td className="app-td">Software Engineer</td>
            <td className="app-td">Google</td>
            <td className="app-td">01/01/2023</td>
            <td className="app-td">Final stage</td>
            <td className="app-td">Accepted</td>
            <td className="app-td">Resume1.pdf</td>
            <td className="app-td">CL1.pdf</td>
            <div className="icons-box">
              <RiEditBoxLine className="edit-btn" />
              <RiDeleteBin6Line className="delete-btn" />
            </div>
          </tr>
          <tr className="app-tr">
            <td className="app-td">Full Stack Engineer</td>
            <td className="app-td">Amazon</td>
            <td className="app-td">01/01/2023</td>
            <td className="app-td">First stage</td>
            <td className="app-td">Pending</td>
            <td className="app-td">Resume1.pdf</td>
            <td className="app-td">CL1.pdf</td>
            <div className="icons-box">
              <RiEditBoxLine className="edit-btn" />
              <RiDeleteBin6Line className="delete-btn" />
            </div>
          </tr>
        </Table>
        <NewApplication
          show={showNewAppBox}
          title="new application?"
          cancel={cancel}
        />
      </div>
    </div>
  );
};

export default Dashboard;
