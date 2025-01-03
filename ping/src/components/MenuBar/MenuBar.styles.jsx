import styled from "styled-components";
const Bar = styled.div`
  position: fixed;
  top: 0px;
  display: flex;
  justify-content: space-between;
  height: 108px;
  width: 100%;
  background-color: #000000;
  z-index: 10;
  padding: 0 40px;
  box-sizing: border-box;

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

  .left_menu {
    display: flex;
    gap: 25px;
    align-items: center;
    box-sizing: border-box;
    > * {
      font-size: 18px;
      font-weight: 550;
      text-align: center;
      box-sizing: border-box;
    }
    > p {
      cursor: pointer;
      line-height: 108px;
    }
    > img {
      width: 60px;
    }
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
      cursor: pointer;
      line-height: 108px;
    }

    .login_btn {
      border: none;
      border: 1px solid #ffffff;
      color: #ffffff;
      background-color: black;
      width: 82px;
    }
    .free_btn {
      border: 1px solid black;
      background-color: #e4ff0d;
      color: black;
    }
  }
`;

export { Bar };
