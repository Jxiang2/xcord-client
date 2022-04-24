/// <reference types="react-scripts" />
import React from "react";

type ReactChildrenPropsType = {
  children: React.ReactNode;
};

interface IInputLabel {
  value: string,
  setValue: React.Dispatch<React.SetStateAction<string>>;
  label: string,
  type: string,
  promptText: string
}

interface ILoginInputs {
  mail: string;
  setMail: React.Dispatch<React.SetStateAction<string>>;
  password: any;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
}

export {
  ReactChildrenPropsType,
  IInputLabel,
  ILoginInputs
};