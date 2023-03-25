import axios from "axios";

const axiosClient = axios.create({
  // Put your base URL here
  baseURL: "https://pokeapi.co/api/v2/",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// If there are authentication, use this interceptor
// axiosClient.interceptors.response.use();

export default axiosClient;
