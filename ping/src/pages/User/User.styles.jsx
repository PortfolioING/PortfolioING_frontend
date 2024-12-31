import styled from "styled-components";
import { HEADER } from "../../utils/constant/Bar";
export const UserWrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
  margin-top: ${HEADER}px;
  padding-top: 40px;
`;
export const MainContent = styled.div`
  width: 600px;
  margin-left: 35%;
  height: 100vh;
  display: flex;
  justify-content: flex-start;
  box-sizing: border-box;
`;
export const Wrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
`;

export const Title = styled.div`
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
  }
`;
