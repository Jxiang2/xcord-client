import React from 'react';
import InputLabel from "./InputLabel";
import {ILoginInputs} from "../react-app-env";

const LoginInputForm = ({mail, setMail, password, setPassword}: ILoginInputs) => {

  return (
    <>
      <InputLabel
        value={mail}
        setValue={setMail}
        label="email"
        type="text"
        promptText="Enter email address"
      />

      <InputLabel
        value={password}
        setValue={setPassword}
        label="password"
        type="text"
        promptText="Enter password"
      />
    </>
  );
};

export default LoginInputForm;