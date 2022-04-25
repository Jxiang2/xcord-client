import React, {useEffect, useState} from "react";
import {NavigateFunction, useNavigate} from "react-router-dom";

import AuthBox from "../../components/AuthBox";
import {Tooltip, Typography} from "@mui/material";
import RegisterPageInputForm from "./RegisterPageInputForm";
import CustomPrimaryButton from "../../components/CustomPrimaryButton";
import RedirectInfo from "../../components/RedirectInfo";
import {validateRegisterForm} from "../../utils/validators";
import {getActions} from "../../store/actions/authActions";
import {connect} from "react-redux";
import type {Dispatch} from "@reduxjs/toolkit";

const INVALID_FORM_MESSAGE = "Enter correct email address and password that contains" +
  " 6-20 characters";
const VALID_FORM_MESSAGE = "Press to login!";

const RegisterPage = ({registerAction}: {
  registerAction: (userDetails: object, navigate: NavigateFunction) => void
}) => {
  const [mail, setMail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsFormValid(validateRegisterForm(mail, password, username));
  }, [mail, username, password]);

  const handleRegister = () => {
    registerAction({mail, username, password}, navigate);

  };

  return (
    <AuthBox>
      <Typography variant="h5" sx={{color: "white"}}>
        Create an Account
      </Typography>

      <RegisterPageInputForm
        mail={mail}
        setMail={setMail}
        password={password}
        setPassword={setPassword}
        username={username}
        setUsername={setUsername}
      />

      <Tooltip title={isFormValid ? VALID_FORM_MESSAGE : INVALID_FORM_MESSAGE}>
        <div>
          <CustomPrimaryButton
            label="Login"
            additionalStyles={{marginTop: "30px"}}
            disabled={!isFormValid}
            clickButton={handleRegister}
          />
        </div>
      </Tooltip>

      <RedirectInfo
        text="Already have an account? "
        redirectText="Log in"
        additionalStyles={{margin: "5px", color: "grey"}}
        redirectHandler={() => navigate("/login")}
      />
    </AuthBox>
  );
};

const mapActionsToProps = (dispatch: Dispatch) => {
  return {...getActions(dispatch)};
};

export default connect(null, mapActionsToProps)(RegisterPage);