import api from "../../utils/api";
import type {NavigateFunction} from "react-router-dom";
import type {Dispatch} from "@reduxjs/toolkit";
import {openAlertMessage} from "./alertAction";

export const authActions = {
  SET_USER_DETAILS: "AUTH.SET_USER_DETAILS" // code name of action: real name of action
};

export const getActions = (dispatch: Dispatch<any>) => {
  return {
    loginAction:
      (userDetails: any, navigate: NavigateFunction) =>
        dispatch(login(userDetails, navigate)),
    registerAction:
      (userDetails: any, navigate: NavigateFunction) =>
        dispatch(register(userDetails, navigate)),
    setUserDetailsAction:
      (userDetails: any) =>
        dispatch({
          type: authActions.SET_USER_DETAILS,
          payload: userDetails
        })
  };
};

const login = (userDetails: any, navigate: NavigateFunction) => {
  return async (dispatch: Dispatch) => {
    const response: any = await api.login(userDetails);

    if (response?.error) {
      dispatch(openAlertMessage(response?.exception?.response?.data));
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
      dispatch(openAlertMessage(response?.exception?.response?.data));
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