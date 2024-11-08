import styled from "styled-components";
const Wrapper = styled.div`
  width: 100%;
  display: flex;
`;
const LeftWrapper = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  width: 30%;
  justify-content: center;
  align-items: center;
  padding-top: 50px;
`;

const Title = styled.div`
  width: 230px;
  font-size: 38px;
  font-weight: 500;
  margin-bottom: 35px;
`;

const Nav = styled.nav`
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

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

export { Wrapper, LeftWrapper, Title, Nav };
