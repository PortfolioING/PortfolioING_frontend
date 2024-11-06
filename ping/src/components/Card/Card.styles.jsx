import styled from "styled-components";
const CardWrapper = styled.div`
  z-index: 5;
  position: relative;
  justify-content: flex-start;

  display: flex;
  padding: 10px;
  width: 230px;
  height: 140px;
  border-radius: 20px;
  border: 0.5px solid black;
  box-sizing: border-box;
  background-color: ${(props) => props.color || black};
  > img {
    height: 20px;
    width: 20px;
    margin-right: 6px;
  }
  > .click {
    border: 0.5px solid #000000;
    position: absolute;
    top: 55px;
    left: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    background-color: #dededeb5;
    opacity: 0.5;
    border-radius: 50%;
  }
`;

export { CardWrapper };
