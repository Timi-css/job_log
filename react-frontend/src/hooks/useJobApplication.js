import { useState, useEffect } from "react";

const useJobApplication = (applicationId) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [application, setApplication] = useState(null);

  useEffect(() => {
    const fetchJobApplication = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token || token === undefined) {
          throw new Error("No token available");
        }

        const response = await fetch(
          `http://localhost:8080/api/user-application/${applicationId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (!response.ok) {
          throw new Error("Failed to fetch job Application");
        }
        const data = await response.json();
        setApplication(data);
        setLoading(false);
      } catch (error) {
        setError(
          error.message || "An error occurred while loading the job application"
        );
        setLoading(false);
      }
    };
    fetchJobApplication();
  }, [applicationId]);
  return { loading, error, application };
};

export default useJobApplication;
