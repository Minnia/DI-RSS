import axios from "axios";
import diRoutes from "./di.routes";

export const axiosClient = axios.create({
  baseURL: "https://www.di.se/rss",
  headers: {
    "Content-Type": "multipart/form-data",
    Accept: "application/json",
  },
});

const api = {
  ...diRoutes(axiosClient),
};

export default api;
