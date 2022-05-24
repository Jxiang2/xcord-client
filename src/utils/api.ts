import axios, {AxiosError} from "axios";
import {ILoginData, IRegisterData} from "../react-app-env";

const logout = () => {
  localStorage.clear();
  window.location.pathname = "/login";
};

const apiClient = axios.create({
  baseURL: "http://127.0.0.1:8080/api",
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

const checkResponseCode = (exception: AxiosError) => {
  const responseCode = exception?.response?.status;
  if (responseCode) {
    (responseCode === 401 || responseCode === 403) && logout();
  }
};

// unsecure roots
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

// secure roots
const sendFriendInvite = async (data: { targetMail: string }) => {
  try {
    return await apiClient.post("/friend-invite/invite", data);
  } catch (e) {
    checkResponseCode(e);
    return {error: true, exception: e};
  }
};

const acceptFriendInvite = async (data: { id: string }) => {
  try {
    return await apiClient.post("/friend-invite/accept", data);
  } catch (e) {
    checkResponseCode(e);
    return {error: true, exception: e};
  }
};

const rejectFriendInvite = async (data: { id: string }) => {
  try {
    return await apiClient.post("/friend-invite/reject", data);
  } catch (e) {
    checkResponseCode(e);
    return {error: true, exception: e};
  }
};

const api = {login, logout, register, sendFriendInvite, acceptFriendInvite, rejectFriendInvite};
export default api;