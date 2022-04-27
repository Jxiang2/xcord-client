/// <reference types="react-scripts" />
import React from "react";
import {Action} from "@reduxjs/toolkit";

type ReactChildrenPropsType = {
  children: React.ReactNode;
};

interface IInputLabel {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  label: string;
  type: string;
  promptText: string;
}

interface ICustomButton {
  label: string;
  additionalStyles?: { [k: string]: string | number };
  disabled?: boolean;
  clickButton: () => void;
}

interface ILoginInputForm {
  mail: string;
  setMail: React.Dispatch<React.SetStateAction<string>>;
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
}

interface IRedirectInfo {
  text: string;
  redirectText: string;
  additionalStyles: { [k: string]: string | number };
  redirectHandler: () => void;
}

interface IRegisterInputForm {
  mail: string;
  setMail: React.Dispatch<React.SetStateAction<string>>;
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  username: string;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
}

interface IAlertNotification {
  showAlert?: boolean;
  closeAlertMessageAction?: () => void;
  alertContent?: any;
}

interface IReduxState {
  alert: {
    showAlert: boolean;
    alertContent: any;
  };
  auth: {
    userDetails: null | { [k: string]: string | number }
  };
}

interface IReduxAction extends Action {
  type: string;
  payload: { [k: string]: string | number | object | boolean };
}

interface ILoginData {
  username: string;
  password: string;
}

interface IRegisterData {
  username: string;
  password: string;
  mail: string;
}

interface IAddFriendDialog {
  isDialogOpen: boolean;
  closeDialog: () => void;
  sendFriendInvitation: () => void;
}

export {
  ReactChildrenPropsType,
  IInputLabel,
  ILoginInputForm,
  ICustomButton,
  IRedirectInfo,
  IRegisterInputForm,
  IReduxAction,
  IAlertNotification,
  IReduxState,
  ILoginData,
  IRegisterData,
  IAddFriendDialog
};