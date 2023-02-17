import axios from "axios";
import Cookies from "js-cookie";

const api = axios.create({
  withCredentials: true,
});

const token = Cookies.get("token");

if (token) {
  api.interceptors.request.use((config) => {
    config.headers.Authorization = `Token ${token}`;
    return config;
  });
}

export default api;
