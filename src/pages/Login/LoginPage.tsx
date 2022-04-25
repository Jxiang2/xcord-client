import React, {useEffect, useState} from "react";
import {NavigateFunction, useNavigate} from "react-router-dom";
import {connect} from "react-redux";
import {getActions} from "../../store/actions/authActions";
import {Tooltip, Typography} from "@mui/material";

import AuthBox from "../../components/AuthBox";
import LoginPageInputForm from "./LoginPageInputForm";
import CustomPrimaryButton from "../../components/CustomPrimaryButton";
import RedirectInfo from "../../components/RedirectInfo";
import {validateLoginForm} from "../../utils/validators";
import type {Dispatch} from "@reduxjs/toolkit";

const INVALID_FORM_MESSAGE = "Enter correct email address and password that contains" +
  " 6-12 characters";
const VALID_FORM_MESSAGE = "Press to login!";

const LoginPage = ({loginAction}: {
  loginAction: (userDetails: object, navigate: NavigateFunction) => void
}) => {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsFormValid(validateLoginForm(mail, password));
  }, [mail, password]);

  const handleLogin = () => {
    loginAction({mail, password}, navigate);
  };

  return (
    <AuthBox>
      <Typography variant="h5" sx={{color: "white"}}>
        Welcome Back!
      </Typography>
      <Typography sx={{color: "#b9bbbe"}}>
        We are happy that you are with us
      </Typography>

      <LoginPageInputForm
        mail={mail}
        setMail={setMail}
        password={password}
        setPassword={setPassword}
      />

      <Tooltip title={isFormValid ? VALID_FORM_MESSAGE : INVALID_FORM_MESSAGE}>
        <div>
          <CustomPrimaryButton
            label="Login"
            additionalStyles={{marginTop: "30px"}}
            disabled={!isFormValid}
            clickButton={handleLogin}
          />
        </div>
      </Tooltip>

      <RedirectInfo
        text="Need an account? "
        redirectText="Create an account"
        additionalStyles={{margin: "5px", color: "grey"}}
        redirectHandler={() => navigate("/register")}
      />
    </AuthBox>
  );
};

const mapActionsToProps = (dispatch: Dispatch) => {
  return {...getActions(dispatch)};
};

export default connect(null, mapActionsToProps)(LoginPage);
