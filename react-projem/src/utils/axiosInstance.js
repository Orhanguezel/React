import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000", // API base URL
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("Axios Error:", error);
    return Promise.reject(error);
  }
);

export default axiosInstance;
