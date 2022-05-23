import React from 'react';
import {Alert, Snackbar} from "@mui/material";
import {connect} from "react-redux";
import {getActions} from "../store/actions/alertAction";
import {Dispatch} from "@reduxjs/toolkit";
import {IAlertNotificationPropsType, IReduxState} from "../react-app-env";

const AlertNotification = (
  {
    showAlert,
    closeAlertMessageAction,
    alertContent
  }: IAlertNotificationPropsType) => {
  return (
    <Snackbar
      anchorOrigin={{vertical: "bottom", horizontal: "center"}}
      open={showAlert}
      onClose={closeAlertMessageAction}
      autoHideDuration={6000}
    >
      <Alert severity="info">
        {alertContent?.message}
      </Alert>
    </Snackbar>
  );
};

const mapStoreStateToProps = (state: IReduxState) => {
  return {...state.alert};
};

const mapActionsToProps = (dispatch: Dispatch) => {
  return {...getActions(dispatch)};
};

export default connect(mapStoreStateToProps, mapActionsToProps)(AlertNotification);
