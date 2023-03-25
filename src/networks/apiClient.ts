import axios from "axios";
import UniversalCookie from "universal-cookie";

export const cookies = new UniversalCookie();

export const axiosClient = axios.create({
  // Put your base URL here
  baseURL: "https://backend-dev-tbth.onrender.com",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// Interceptor for authentication
axiosClient.interceptors.request.use((config) => {
  const token = cookies.get("jwt_token");

  if (token) {
    config.headers = config.headers || {};
    config.headers.Authorization = `token ${token}`;
  }
  return config;
});
