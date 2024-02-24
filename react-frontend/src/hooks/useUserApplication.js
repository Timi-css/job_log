// import { useState, useEffect } from "react";
// import useApi from "./useApi";

// const useUserApplication = () => {
//   const token = localStorage.getItem("token");
//   const url = "http://localhost:8080/api/user-applications";

//   const { loading, setLoading, data: applications, error } = useApi(url, token);

//   useEffect(() => {
//     setLoading(true);
//   }, [setLoading]);
//   return { loading, applications, error };
// };

// export default useUserApplication;

// useUserApplication.js
import { useState, useEffect } from "react";

const useUserApplication = (userId) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserApplications = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token || token === undefined) {
          throw new Error("No token available");
        }

        const response = await fetch(
          `http://localhost:8080/api/user-applications/${userId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error("Error fetching user applications");
        }

        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error.message || "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchUserApplications();
  }, [userId]);

  return { data, loading, error };
};

export default useUserApplication;
