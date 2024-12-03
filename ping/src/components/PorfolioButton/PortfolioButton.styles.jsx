import styled from "styled-components";

export const Button = styled.div`
  z-index: 10;
  position: fixed;
  top: 20px;
  right: 20px;
  width: 210px;
  height: 40px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 5px;
  background-color: white;
  border-radius: 15px;
  font-size: 17px;
  font-weight: 550;

  > .save-btn {
    background-color: #e4ff0d;
    padding: 5px 10px;
    border-radius: 10px;
    border: 0.5px solid black;
  }
  > div {
    cursor: pointer;
  }
  box-shadow: inset 0px 4px 6px rgba(0, 0, 0, 0.2),
    inset 0px -4px 6px rgba(255, 255, 255, 0.4);
  box-sizing: border-box;
`;
