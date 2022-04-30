import React from 'react';
import InputLabel from "../../components/InputLabel";
import {ILoginInputFormPropsType} from "../../react-app-env";

const LoginPageInputForm = ({mail, setMail, password, setPassword}: ILoginInputFormPropsType) => {
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

export default LoginPageInputForm;