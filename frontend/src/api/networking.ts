import axios from "axios";

const axiosInstanceToApi = axios.create({
  baseURL: "http://localhost:5000",
  timeout: 1000,
  headers: {
    "Content-Type": "application/json",
    // Authorization: "Bearer YOUR_TOKEN_HERE",
  },
});

axiosInstanceToApi.interceptors.request.use((request) => {
  return request;
});

axiosInstanceToApi.interceptors.response.use((response) => {
  return response;
});

export default axiosInstanceToApi;
