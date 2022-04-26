import axios, {AxiosError} from "axios";
import {logout} from "./auth";
import {ILoginData, IRegisterData} from "../react-app-env";

const apiClient = axios.create({
  baseURL: "http://127.0.0.1:8000/api",
  timeout: 1000
});

apiClient.interceptors.request.use((config) => {
    const userDetails = localStorage.getItem("user");

    if (userDetails) {
      const token = JSON.parse(userDetails).token;
      config.headers && (config.headers.Authorization = `Bearer ${token}`);
    }

    return config;
  },
  (error) => Promise.reject(error)
);

const login = async (loginData: ILoginData) => {
  try {
    return await apiClient.post("/auth/login", loginData);
  } catch (e) {
    if (axios.isAxiosError(e))
      return {error: true, exception: e};
  }
};

const register = async (registerData: IRegisterData) => {
  try {
    return await apiClient.post("/auth/register", registerData);
  } catch (e) {
    if (axios.isAxiosError(e))
      return {error: true, exception: e};
  }
};

const checkResponseCode = (exception: AxiosError) => {
  const responseCode = exception?.response?.status;
  if (responseCode) {
    (responseCode === 401 || responseCode === 403) && logout();
  }
};

const api = {login, register};
export default api;