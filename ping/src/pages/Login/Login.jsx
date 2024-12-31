import "../../styles/LoginPage.css";
import GitLogo from "../../asset/git.svg";
import FormField from "../../components/Form/FormField";

import {
  Wrapper,
  LogoWrapper,
  AccountCreationWrapper,
  CreationTitle,
  GitHubIcon,
  LoginWrapper,
  FormWrapper,
} from "./Login.styles";
import Button from "../../components/Button/Button";

import Ping from "../../asset/ping.jsx";
import { useLogin } from "../../hooks/useLogin/useLogin.js";
function LoginPage() {
  return (
    <Wrapper>
      <LogoSection />
      <LoginSection />
    </Wrapper>
  );
}
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
function LoginSection() {
  const { email, setEmail, password, setPassword, handleLogin } = useLogin();

  return (
    <LoginWrapper>
      <div className="title">Login</div>
      <FormWrapper>
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
          mainColor="LimeBlackL"
          onClick={handleLogin}
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
      <GitHubIcon src={GitLogo} alt="Git login button" />
    </AccountCreationWrapper>
  );
}

export default LoginPage;
