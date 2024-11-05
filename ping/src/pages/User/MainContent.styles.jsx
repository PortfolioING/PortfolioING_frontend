import styled from "styled-components";

const MainContentWrapper = styled.div`
  margin-left: 30%;
  padding: 20px;
  flex-grow: 1;
  box-sizing: border-box;
`;

const Wrapper = styled.div`
  width: 800px;
  padding: 20px;
  > * {
    margin-bottom: 30px;
  }
`;
const Title = styled.div`
  display: flex;
  justify-content: space-between;

  > .title {
    display: flex;
    align-items: center;
    font-size: 27px;
    font-weight: 600;
  }
  > .search-wrapper {
    border: 0.5px solid #000000;
    width: 240px;
    height: 34px;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2px 10px;
    > input {
      border: none;
      outline: none;
    }
  }
`;
export { MainContentWrapper, Wrapper, Title };
