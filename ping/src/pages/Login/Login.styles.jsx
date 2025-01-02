import styled from "styled-components";
const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
`;

const LogoWrapper = styled.div`
  position: absolute;
  left: 20%;
  display: flex;
  justify-content: flex-start;
  width: 380px;
  height: 580px;
  border-radius: 50px;
  background: #e4ff0d;
  .logo {
    display: flex;
    margin: 30px 0 0 20px;
    font-size: 36px;
    font-weight: 900;
  }
`;
const LoginWrapper = styled.div`
  position: absolute;
  left: 35%;
  display: flex;
  flex-direction: column;
  padding-top: 40px;
  width: 550px;
  height: 580px;
  border-radius: 50px;
  background: white;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.3);
  box-sizing: border-box;
  > .title {
    padding-left: 50px;
    font-size: 45px;
    font-weight: 700;
  }
`;
const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 35px;
`;
const AccountCreationWrapper = styled.div`
  margin-top: 35px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const CreationTitle = styled.div`
  position: relative;
  width: 400px;
  border-top: 1px solid #dedede;

  .text {
    position: absolute;
    top: -10px;
    left: 30%;
    color: #dedede;
    background-color: white;
    padding: 0 10px;
    z-index: 2;
    font-size: 16px;
  }
`;
const GitHubIcon = styled.img`
  width: 80px;
  margin-top: 30px;
`;
export {
  Wrapper,
  LogoWrapper,
  AccountCreationWrapper,
  CreationTitle,
  GitHubIcon,
  LoginWrapper,
  FormWrapper,
};
