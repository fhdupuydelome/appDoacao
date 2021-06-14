import axios from "axios";

const api = axios.create({
  baseURL: "https://608b6ebb737e470017b74c8b.mockapi.io/",
});

export default api;
