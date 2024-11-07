import styled from "styled-components";
const Bar = styled.div`
  position: fixed;
  top: 0px;
  display: flex;
  justify-content: space-around;
  height: 108px;
  width: 100%;
  background-color: #000000;
  z-index: 10;

  > div {
    color: #ffffff;
  }
  > div {
    flex-shrink: 0;
    min-width: 300px;
  }

  > div p {
    white-space: nowrap;
  }

  button {
    white-space: nowrap;
  }
  .wrap_menu {
    display: flex;
    justify-content: space-around;
    gap: 30px;
    align-items: center;
    box-sizing: border-box;
    > * {
      font: 25px;
      text-align: center;
      box-sizing: border-box;
    }
    > p {
      line-height: 108px;
    }
    > button {
      border-radius: 20px;
      padding: 1px;
      height: 40px;
      box-sizing: border-box;
    }
    .login_btn {
      border: none;
      border: 1px solid #ffffff;
      color: #ffffff;
      background-color: black;
      width: 82px;
    }
    .free_btn {
      width: 160px;
      border: 1px solid black;
      background-color: #e4ff0d;
      color: black;
    }
  }
`;
const Placeholder = styled.div`
  margin-bottom: 108px;
`;
export { Bar, Placeholder };
