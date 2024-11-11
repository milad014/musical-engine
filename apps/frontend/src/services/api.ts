import axios from "axios";

// Create an Axios instance with a base URL
const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL, // This will be your API's base URL
  headers: {
    "Content-Type": "application/json",
  },
});

// Request Interceptor (if you want to add authentication token or modify requests)
api.interceptors.request.use(
  (config) => {
    // Optionally add authorization header or other global settings
    const token = localStorage.getItem("authToken"); // Example: get auth token from local storage
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    // Handle request errors
    return Promise.reject(error);
  }
);

// Response Interceptor (to handle responses globally)
api.interceptors.response.use(
  (response) => {
    // Handle response globally if needed (e.g., log response, modify response)
    return response;
  },
  (error) => {
    // Handle response errors (e.g., show notification, redirect on unauthorized)
    if (error.response && error.response.status === 401) {
      // Example: redirect to login page on unauthorized
      window.location.href = "/login";
    } else {
      console.error("API Error:", error);
    }
    return Promise.reject(error);
  }
);

// Functions to make API calls
export const fetchNotes = () => api.get("/notes");
export const fetchChords = () => api.get("/chords");
