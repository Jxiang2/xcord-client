/// <reference types="react-scripts" />
import React, {ReducerAction} from "react";
import type {Action} from "@reduxjs/toolkit";

// types
type UserDetails = null | {
  token: string;
  [k: string]: stringf
};

type Friends = IFriendProperty[]


// interfaces
export interface IFriendProperty {
  id: string,
  mail: string,
  username: string
  isOnline?: boolean
}

export interface ReactChildrenPropsType {
  children: React.ReactNode;
}

export interface IInputLabelPropsType {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  label: string;
  type: string;
  promptText: string;
}

export interface ICustomButtonPropsType {
  label: string;
  additionalStyles?: { [k: string]: string | number };
  disabled?: boolean;
  clickButton: ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void) | undefined;
}

export interface ILoginInputFormPropsType {
  mail: string;
  setMail: React.Dispatch<React.SetStateAction<string>>;
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
}

export interface IRedirectInfoPropsType {
  text: string;
  redirectText: string;
  additionalStyles: React.CSSProperties;
  redirectHandler: () => void;
}

export interface IRegisterInputFormPropsType {
  mail: string;
  setMail: React.Dispatch<React.SetStateAction<string>>;
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  username: string;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
}

export interface IAlertNotification {
  showAlert: boolean;
  closeAlertMessageAction?: ReducerAction;
  alertContent: null | { [k: string]: string };
}

export interface IReduxState {
  alert: {
    showAlert: boolean;
    alertContent: null | { [k: string]: string };
  };
  auth: {
    userDetails: UserDetails;
  };
}

export interface IReduxAction extends Action {
  type: string;
  payload:
    | { [k: string]: string | number | object | boolean }
    | IFriendProperty[]
    | IPendingInvite[];
}

export interface ILoginData {
  username: string;
  password: string;
}

export interface IRegisterData {
  username: string;
  password: string;
  mail: string;
}

export interface IAddFriendDialogPropsType {
  isDialogOpen: boolean;
  closeDialog: () => void;
  sendFriendInviteAction?: (data: { targetMail: string }) => void;
}

export interface IPendingInvitationItemPropsType {
  id: string;
  username: string;
  mail: string;
  acceptFriendInviteAction?: ({id: string}) => void;
  rejectFriendInviteAction?: ({id: string}) => void;
}

export interface IAvatarPropsType {
  username: string;
  large?: string;
}

export interface IFriendItemPropsType {
  id: string;
  username: string;
  isOnline?: boolean;
}

export interface IPendingInvite {
  receiverId: string;
  senderId: { _id: string, mail: string, username: string };
  _id: string;
}

export interface IPendingInvitationListPropsType {
  pendingFriendsInvites?: IPendingInvite[];
}

export interface IFriendsListPropsType {
  friends?: Friends;
}