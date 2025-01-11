import styled from "styled-components";
export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
`;

export const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 60px;
  width: 40%;
  height: 90%;
  border-radius: 50px;
  background: white;
  box-sizing: border-box;
  > img {
    width: 91px;
    height: 60px;
  }
  > * {
    margin-bottom: 40px;
  }
`;
export const FormWrapper = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 35px;
  box-sizing: border-box;
`;
export const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  margin-bottom: 40px;
  > label {
    position: absolute;
    top: -28px;
    left: 10px;
    font-size: 20px;
    font-weight: 500;
  }
  > input {
    width: 100%;
    height: 60px;
    padding: 10px 20px;
    border: 1px solid black;
    border-radius: 20px;
  }
  > input:focus {
    border: 1px solid #eaff0d;
  }
  > .error-message {
    color: red;
  }
`;
export const AccountCreationWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
`;
export const CreationTitle = styled.div`
  position: relative;
  width: 100%;
  border-top: 1px solid #dedede;

  .text {
    position: absolute;
    top: -10px;
    left: 35%;
    color: #dedede;
    background-color: white;
    padding: 0 10px;
    z-index: 2;
    font-size: 16px;
  }
`;
export const Icons = styled.div`
  margin-top: 50px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  > img {
    width: 65px;
  }
`;
