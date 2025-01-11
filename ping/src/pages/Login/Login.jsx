import "../../styles/LoginPage.css";
import github from "../../asset/icons/github.svg";
import naver from "../../asset/icons/naver.svg";
import google from "../../asset/icons/google.svg";
import {
  Wrapper,
  AccountCreationWrapper,
  CreationTitle,
  Icons,
  LoginWrapper,
  FormWrapper,
  InputWrapper,
} from "./Login.styles";
import Button from "../../components/Button/Button";

import ping from "../../asset/icons/pingIcon.svg";
import { useState } from "react";
import { useLogin } from "../../hooks/useLogin/useLogin.js";

function LoginPage() {
  return (
    <Wrapper>
      <LoginSection />
    </Wrapper>
  );
}

function LoginSection() {
  const { email, setEmail, password, setPassword, handleLogin } = useLogin();
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const validateAndLogin = () => {
    let isValid = true;

    if (!email) {
      setEmailError("Please enter your email");
      isValid = false;
    } else {
      setEmailError("");
    }

    if (!password) {
      setPasswordError("Please enter your password");
      isValid = false;
    } else {
      setPasswordError("");
    }

    if (isValid) {
      handleLogin();
    }
  };

  return (
    <LoginWrapper>
      <img src={ping} alt="Ping Icon" />
      <FormWrapper>
        <InputWrapper>
          <label>Email</label>
          <input
            style={{ marginBottom: "10px" }}
            placeholder="ping@konkuk.ac.kr"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {emailError && <p className="error-message">{emailError}</p>}
        </InputWrapper>
        <InputWrapper>
          <label>Password</label>
          <input
            type="password"
            placeholder="●●●●●●●●"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {passwordError && <p className="error-message">{passwordError}</p>}
        </InputWrapper>

        <Button
          width="100%"
          height="60px"
          size="lg"
          children="Login"
          onClick={validateAndLogin}
        />
      </FormWrapper>
      <AccountCreationSection />
    </LoginWrapper>
  );
}

function AccountCreationSection() {
  return (
    <AccountCreationWrapper>
      <CreationTitle>
        <p className="text">Create an Account</p>
      </CreationTitle>
      <Icons>
        <img src={naver} alt="Naver login button" />
        <img src={google} alt="Google login button" />
        <img src={github} alt="GitHub login button" />
      </Icons>
    </AccountCreationWrapper>
  );
}

export default LoginPage;
