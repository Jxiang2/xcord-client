import {Dispatch} from "@reduxjs/toolkit";

export const alertActions = {
  OPEN_ALERT_MESSAGE: "ALERT.OPEN_ALERT_MESSAGE",
  CLOSE_ALERT_MESSAGE: "ALERT.CLOSE_ALERT_MESSAGE",
};

export const getActions = (dispatch: Dispatch) => {
  return {
    openAlertMessageAction:
      (message: { message: string }) => dispatch(openAlertMessage(message)),
    closeAlertMessageAction:
      () => dispatch(closeAlertMessage()),
  };
};

export const openAlertMessage = (content: { message: string }) => {
  return {
    type: alertActions.OPEN_ALERT_MESSAGE,
    payload: content
  };
};

export const closeAlertMessage = () => {
  return {
    type: alertActions.CLOSE_ALERT_MESSAGE,
  };
};