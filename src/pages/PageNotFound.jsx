import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import { ThemeContext } from "../context/ThemeProvider";

function PageNotFound() {
  const navigate = useNavigate();
  const { theme } = useContext(ThemeContext);

  return (
    <div className={theme ? "light-mode" : "dark-mode"}>
      <div className="page-not-found d-flex flex-column justify-content-center align-items-center vh-100">
        <div className="text-center p-5 shadow rounded">
          <FontAwesomeIcon
            icon={faExclamationTriangle}
            className="text-danger mb-3"
            size="4x"
          />
          <h1 className="display-4 fw-bold">404 - Page Not Found</h1>
          <p className="lead">
            Oops! The page you're looking for doesn't exist.
          </p>
          <button
            className="btn btn-primary mt-3"
            onClick={() => navigate("/")}
          >
            Go Home Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default PageNotFound;
