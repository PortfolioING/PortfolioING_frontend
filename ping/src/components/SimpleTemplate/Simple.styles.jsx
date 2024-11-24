import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: black;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  box-sizing: border-box;
`;

export const Content = styled.div`
  margin: 0 auto;
  width: 1020px;
  height: 100%;
  border-left: 2px solid ${(props) => props.color.mainColor || "default"};
  border-right: 2px solid ${(props) => props.color.mainColor || "default"};
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  .portfolio-label {
    margin-top: 20px;
    padding: 10px;

    color: white;
    border-bottom: 1px solid ${(props) => props.color.mainColor || "default"};
    font-size: 20px;
  }
  .content-label {
    display: flex;
    justify-content: center;

    padding: 15px 0;
    color: ${(props) => props.color.mainColor || "default"};
    border-bottom: 1px solid ${(props) => props.color.mainColor || "default"};
    font-size: 28px;
    font-weight: 600;
  }
`;

export const MainContainer = styled.div`
  width: 100%;
  display: flex;
  padding: 40px 30px;
  box-sizing: border-box;
`;
