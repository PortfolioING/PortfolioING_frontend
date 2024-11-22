import "../../styles/LoginPage.css";
import GitLogo from "../../asset/git.svg";
import FormField from "../../components/Form/FormField";

import {
  Wrapper,
  LogoWrapper,
  AccountCreationWrapper,
  UnderlineText,
  GitImage,
  LoginWrapper,
  Title,
  Form,
} from "./Login.styles";
import Button from "../../components/Button/Button";
import Login from "../../apis/login";
import Ping from "../../asset/ping.jsx";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function LogoSection() {
  return (
    <LogoWrapper>
      <div className="logo">
        <Ping width={40} height={40} fillPath1="black" fillPath2="#E4FF0D" />
        <p>Ping</p>
      </div>
    </LogoWrapper>
  );
}

function AccountCreationSection() {
  return (
    <AccountCreationWrapper>
      <UnderlineText>
        <p className="text">Create an Account</p>
      </UnderlineText>
      <GitImage src={GitLogo} alt="Git login button" />
    </AccountCreationWrapper>
  );
}
function LoginForm({ children }) {
  return (
    <LoginWrapper>
      <Title>Login</Title>
      <Form>{children}</Form>
    </LoginWrapper>
  );
}

function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState(""); // 이메일 상태 저장
  const [password, setPassword] = useState(""); // 비밀번호 상태 저장

  const navigateToLoginSuccess = () => {
    navigate("/");
  };

  const handlerClick = async (event) => {
    event.preventDefault();
    if (email == "" || password == "") {
      alert("email과 password를 입력해주세요.");
      return;
    }
    try {
      const result = await Login(email, password);
      if (result) {
        console.log("로그인 성공");
        sessionStorage.setItem("isLogin", true);
        sessionStorage.setItem("userId", result.data.userId);
        navigateToLoginSuccess(); // 로그인 성공시 redirection
      } else {
        console.log("로그인 실패");
      }
    } catch (error) {
      console.error("로그인 중 오류 발생:", error);
    }
  };

  return (
    <Wrapper>
      <LogoSection />
      <LoginForm>
        <FormField
          label="Email"
          placeholder="ping@konkuk.ac.kr"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <FormField
          label="Password"
          type="password"
          placeholder="●●●●●●●●"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button
          size="lg"
          children="Login"
          mainColor="LimeBlack"
          onClick={handlerClick}
        />

        <AccountCreationSection />
      </LoginForm>
    </Wrapper>
  );
}

export default LoginPage;
