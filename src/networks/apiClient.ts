import axios from "axios";

const axiosClient = axios.create({
  // Put your base URL here
  baseURL: "https://backend-dev-tbth.onrender.com",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// If there are authentication, use this interceptor
axiosClient.interceptors.request.use((config) => {
  console.log("999 ini token");
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjZhNzg2NjNiLWY4ZDktNDY1ZC1iYWI0LTM1Mjc1ZjdiNjY2ZiIsImVtYWlsIjoiYXJpOTlAZ21haWwuY29tIiwibmFtZSI6ImFyaTEyMyIsInBob25lX251bWJlciI6bnVsbCwiaW1hZ2VfdXJsIjpudWxsLCJpYXQiOjE2Nzk1ODMwNjUsImV4cCI6MTY3OTU5Mzg2NX0.gvwe7cCcJEnArW9QMT4krLpm2GPGzAYEVa4t90ejPh4";
  config.headers = config.headers || {};

  if (token) {
    config.headers.Authorization = `token ${token}`;
  }
  return config;
});

export default axiosClient;
