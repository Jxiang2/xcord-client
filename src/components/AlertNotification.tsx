import React from 'react';
import {Alert, Snackbar} from "@mui/material";
import {connect} from "react-redux";
import {getActions} from "../store/actions/alertAction";
import {Dispatch} from "@reduxjs/toolkit";

const AlertNotification = (
  {
    showAlert,
    closeAlertMessageAction,
    alertContent
  }: any) => {
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

const mapStoreStateToProps = (state: any) => {
  return {...state.alert};
};

const mapActionsToProps = (dispatch: Dispatch) => {
  return {...getActions(dispatch)};
};

export default connect(mapStoreStateToProps, mapActionsToProps)(AlertNotification);
