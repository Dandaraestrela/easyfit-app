import axios from "axios";

const baseURL =
  import.meta.env.MODE === "development"
    ? "http://localhost:3333/"
    : "https://easy-fit-api.onrender.com/";

const api = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
