import React from "react";
import "../styles/Error.css";

const Error = ({ message }) => {
  return (
    <div className="container-error-msg ">
      <div className="error-msg-box">
        <p className="error-msg">Error: {message}</p>
      </div>
    </div>
  );
};

export default Error;
