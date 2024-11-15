import styled from "styled-components";

const TemplateWrapper = styled.div`
  position: fixed;
  top: 50px;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > .btn-wrapper {
    width: 30%;
    display: flex;
    justify-content: space-around;
  }
  > .show-template {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    > .btn {
      width: 63.96px;
      height: 80px;
      border-radius: 20px;
      font-size: 40px;
      background-color: #e4e4e429;
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      cursor: pointer;
    }
    > .template {
      margin: 0 30px;
      border-radius: 20px;
      > img {
        width: 850px;
      }
    }
  }
`;
export { TemplateWrapper };
