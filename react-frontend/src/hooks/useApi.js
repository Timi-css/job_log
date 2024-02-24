import { useState, useEffect } from "react";
import React from "react";
import { Error } from "../common";

const useApi = (endpoint) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const response = await fetch(endpoint);
        if (!response.ok) {
          throw new Error("Error fetching data");
        }
        const result = await response.json();
        setData(result.message);
      } catch (error) {
        // setError(error.message || "An error occured");
        setError(<Error message={error.message} />);
      } finally {
        setLoading(false);
        return <p>Loading...</p>;
      }
    };

    fetchData();
  }, [endpoint]);

  return { data, loading, error, setLoading };
};

export default useApi;
