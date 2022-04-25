import api from "../../utils/api";
import type {NavigateFunction} from "react-router-dom";
import type {Dispatch} from "@reduxjs/toolkit";

export const authActions = {
  SET_USER_DETAILS: "AUTH.SET_USER_DETAILS" // code name of action: real name of action
};

export const getActions = (dispatch: Dispatch<any>) => {
  return {
    loginAction:
      (userDetails: any, navigate: NavigateFunction) => dispatch(login(userDetails, navigate)),
    registerAction:
      (userDetails: any, navigate: NavigateFunction) => dispatch(register(userDetails, navigate))
  };
};

const login = (userDetails: any, navigate: NavigateFunction) => {
  return async (dispatch: Dispatch) => {
    const response: any = await api.login(userDetails);
    if (response?.error) {
      // show err message
      console.log(response);
    } else {
      const userDetails = response?.data;
      localStorage.setItem("user", JSON.stringify(userDetails));

      dispatch({
        type: authActions.SET_USER_DETAILS,
        payload: userDetails,
      });

      navigate("/dashboard");
    }
  };
};

const register = (userDetails: any, navigate: NavigateFunction) => {
  return async (dispatch: Dispatch) => {
    const response: any = await api.register(userDetails);
    if (response?.error) {
      // show err message
      console.log(response);
    } else {
      const userDetails = response?.data;
      localStorage.setItem("user", JSON.stringify(userDetails));

      dispatch({
        type: authActions.SET_USER_DETAILS,
        payload: userDetails,
      });

      navigate("/dashboard");
    }
  };
};