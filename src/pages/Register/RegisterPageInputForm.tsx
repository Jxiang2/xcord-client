import React from 'react';
import InputLabel from "../../components/InputLabel";
import {IRegisterInputFormPropsType} from "../../react-app-env";

const RegisterPageInputForm =
  ({
     mail,
     setMail,
     password,
     setPassword,
     username,
     setUsername
   }: IRegisterInputFormPropsType) => {
    return (
      <>
        <InputLabel
          value={mail}
          setValue={setMail}
          label="E-mail address"
          type="text"
          promptText="Enter e-mail address"
        />

        <InputLabel
          value={password}
          setValue={setPassword}
          label="Password"
          type="text"
          promptText="Enter password"
        />

        <InputLabel
          value={username}
          setValue={setUsername}
          label="Username (Display name)"
          type="text"
          promptText="Enter a username"
        />
      </>
    );
  };

export default RegisterPageInputForm;