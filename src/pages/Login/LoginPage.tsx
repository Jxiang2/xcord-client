import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {Tooltip} from "@mui/material";

import AuthBox from "../../components/AuthBox";
import LoginPageHeader from "./LoginPageHeader";
import LoginPageInputForm from "./LoginPageInputForm";
import CustomPrimaryButton from "../../components/CustomPrimaryButton";
import RedirectInfo from "../../components/RedirectInfo";
import {validateLoginForm} from "../../utils/validators";

const INVALID_FORM_MESSAGE = "Enter correct email address and password that contains" +
  " 6-12 characters";
const VALID_FORM_MESSAGE = "Press to login!";


const LoginPage = () => {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsFormValid(validateLoginForm(mail, password));
  }, [mail, password]);

  const handleLogin = () => {
    console.log(mail, password);
  };

  return (
    <AuthBox>
      <LoginPageHeader/>

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

export default LoginPage;
