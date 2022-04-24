import AuthBox from "../components/AuthBox";
import LoginHeader from "../components/LoginHeader";
import LoginInputForm from "../components/LoginInputForm";
import {useState} from "react";

const LoginPage = () => {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <AuthBox>
      <LoginHeader/>
      <LoginInputForm
        mail={mail}
        setMail={setMail}
        password={password}
        setPassword={setPassword}
      />
    </AuthBox>
  );
};

export default LoginPage;
