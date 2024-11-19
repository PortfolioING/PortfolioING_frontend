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
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function LogoSection() {
  return (
    <LogoWrapper>
      <div className="logo">
        <p>🫧</p>
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

    try {
      const result = await Login(email, password);
      if (result) {
        console.log("로그인 성공");
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
          width="350px"
          height="50px"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <FormField
          label="Password"
          type="password"
          placeholder="●●●●●●●●"
          width="350px"
          height="50px"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button
          btnfontSize="20px"
          btnborderradius="50px"
          children="Login"
          btnbordercolor="#e4ff0d"
          btnwidth="350px"
          btnheight="50px"
          btnbackgroundcolor="#e4ff0d"
          onClick={handlerClick}
        />

        <AccountCreationSection />
      </LoginForm>
    </Wrapper>
  );
}

export default LoginPage;
