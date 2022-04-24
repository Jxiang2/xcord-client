import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://127.0.0.1:8000/api",
  timeout: 1000
});

export const login = async (data: any) => {
  try {
    return await apiClient.post("/auth/login", data);
  } catch (e) {
    return {error: e};
  }
};

export const register = async (data: any) => {
  try {
    return await apiClient.post("/auth/register", data);
  } catch (e) {
    return {error: e};
  }
};