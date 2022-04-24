/// <reference types="react-scripts" />
import React from "react";

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
  password: any;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
}

interface IRedirectInfo {
  text: string;
  redirectText: string;
  additionalStyles: { [k: string]: string | number };
  redirectHandler: () => void;
}

export {
  ReactChildrenPropsType,
  IInputLabel,
  ILoginInputForm,
  ICustomButton,
  IRedirectInfo
};