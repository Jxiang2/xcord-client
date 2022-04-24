import React from 'react';
import InputLabel from "../../components/InputLabel";
import {ILoginInputForm} from "../../react-app-env";

const LoginPageInputForm = ({mail, setMail, password, setPassword}: ILoginInputForm) => {

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