import styled from "styled-components";
const PopupWrapper = styled.div`
  z-index: 10;
  background-color: white;
  box-shadow: 0px 7px 10px 0px #00000080;
  width: 400px;
  height: 302px;
  border-radius: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  .title {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-size: 15px;
    font-weight: 200;
    .bold {
      font-size: 27px;
      font-weight: 550;
      margin-bottom: 10px;
    }
  }
`;
const PayContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 366px;
  height: 45px;
  padding: 10px;
  border-radius: 20px;
  border: 1px solid ${(props) => (props.isActive ? "#E4FF0D" : "black")};

  font-size: 20px;
  margin-top: 20px;
  box-sizing: border-box;
  > img {
    width: 80px;
  }
  > div {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    > .round {
      border: 0.5px solid ${({ isActive }) => (isActive ? "#E4FF0D" : "black")};
      width: 30px;
      height: 30px;
      border-radius: 50%;
      margin-right: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      > .small-round {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background-color: ${({ isActive }) => (isActive ? "#E4FF0D" : "white")};
      }
    }
  }
`;
export { PopupWrapper, PayContainer };
