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
import { useContext } from "react";
import { LoginContext } from "../LoginContext";
import { useNavigate } from "react-router-dom";

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
  const { login } = useContext(LoginContext);
  const navigate = useNavigate();
  const handlerClick = () => {
    login();
    navigate("/");
  };
  return (
    <AccountCreationWrapper>
      <UnderlineText>
        <p className="text">Create an Account</p>
      </UnderlineText>
      <GitImage src={GitLogo} alt="Git login button" onClick={handlerClick} />
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
  return (
    <Wrapper>
      <LogoSection />
      <LoginForm>
        <FormField
          label="Email"
          placeholder="ping@konkuk.ac.kr"
          width="350px"
          height="50px"
        />
        <FormField
          label="Password"
          type="password"
          placeholder="●●●●●●●●"
          width="350px"
          height="50px"
        />

        <Button
          btnfontSize="20px"
          btnborderradius="50px"
          children="Login"
          btnbordercolor="#e4ff0d"
          btnwidth="350px"
          btnheight="50px"
          btnbackgroundcolor="#e4ff0d"
        />

        <AccountCreationSection />
      </LoginForm>
    </Wrapper>
  );
}

export default LoginPage;
