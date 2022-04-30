/// <reference types="react-scripts" />
import React, {ReducerAction} from "react";
import type {Action} from "@reduxjs/toolkit";

interface ReactChildrenPropsType {
  children: React.ReactNode;
}

interface IInputLabelPropsType {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  label: string;
  type: string;
  promptText: string;
}

interface ICustomButtonPropsType {
  label: string;
  additionalStyles?: { [k: string]: string | number };
  disabled?: boolean;
  clickButton: ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void) | undefined;
}

interface ILoginInputFormPropsType {
  mail: string;
  setMail: React.Dispatch<React.SetStateAction<string>>;
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
}

interface IRedirectInfoPropsType {
  text: string;
  redirectText: string;
  additionalStyles: React.CSSProperties;
  redirectHandler: () => void;
}

interface IRegisterInputFormPropsType {
  mail: string;
  setMail: React.Dispatch<React.SetStateAction<string>>;
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  username: string;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
}

interface IAlertNotification {
  showAlert: boolean;
  closeAlertMessageAction?: ReducerAction;
  alertContent: null | { [k: string]: string };
}

interface IReduxState {
  alert: {
    showAlert: boolean;
    alertContent: null | { [k: string]: string };
  };
  auth: {
    userDetails: null | { [k: string]: string }
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

interface IAddFriendDialogPropsType {
  isDialogOpen: boolean;
  closeDialog: () => void;
  sendFriendInvitation: () => void;
}

interface IPendingInvitationItemPropsType {
  id: string;
  username: string;
  mail: string;
  acceptInvite: ({id: string}) => void;
  rejectInvite: ({id: string}) => void;
}

interface IAvatarPropsType {
  username: string;
  large?: string;
}

interface IFriendItemPropsType {
  id: string;
  username: string;
  isOnline: boolean;
}

export {
  ReactChildrenPropsType,
  IInputLabelPropsType,
  ILoginInputFormPropsType,
  ICustomButtonPropsType,
  IRedirectInfoPropsType,
  IRegisterInputFormPropsType,
  IAddFriendDialogPropsType,
  IPendingInvitationItemPropsType,
  IFriendItemPropsType,
  IAvatarPropsType,
  IReduxAction,
  IAlertNotification,
  IReduxState,
  ILoginData,
  IRegisterData,
};