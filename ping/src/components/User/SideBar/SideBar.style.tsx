import styled from "styled-components";

export const Wrapper = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  width: 30%;
  justify-content: center;
  align-items: flex-start;
  margin-left: 5%;
  box-sizing: border-box;
`;

export const Title = styled.div`
  width: 100%;
  font-size: 38px;
  font-weight: 500;
  margin-bottom: 35px;
`;

export const Nav = styled.nav`
  li {
    width: 230px;
    padding: 20px;
    border-radius: 20px;
    cursor: pointer;
    font-size: 20px;
    font-weight: 100;

    &.active {
      background-color: #e4ff0d;
      color: white;
      font-weight: bold;
    }

    box-sizing: border-box;
  }
`;
