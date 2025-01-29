import { useState, useEffect } from "react";
import axiosInstance from "../utils/axiosInstance";

export const useFetch = (endpoint) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log(`Fetching data from: ${endpoint}`);
        const response = await axiosInstance.get(endpoint);
        console.log("Fetched data:", response.data);
        setData(response.data);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [endpoint]);

  return { data, error, loading };
};