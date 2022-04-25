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
  additionalStyles: { [k: string]: string | number };
  disabled: boolean;
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

interface IReduxAction extends Action {
  type: string;
  payload: { [k: string]: string | number | object };
}

export {
  ReactChildrenPropsType,
  IInputLabel,
  ILoginInputForm,
  ICustomButton,
  IRedirectInfo,
  IRegisterInputForm,
  IReduxAction,
};