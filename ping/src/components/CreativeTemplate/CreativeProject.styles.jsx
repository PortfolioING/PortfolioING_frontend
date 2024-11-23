import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #f3f3f3;
  display: flex;
  padding: 70px;
  box-sizing: border-box;
  position: relative;
  > div {
    z-index: 10;
  }
  > .project-img {
    position: absolute;
    bottom: 0;
    left: 200px;
    z-index: 8;
  }
`;
const LeftWrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  > .image {
    width: 480px;
    height: 260px;
    background-color: #d9d9d9;
    border-radius: 30px;
    margin-bottom: 30px;
  }
  > .explanations {
    display: flex;
    flex-direction: column;
    > .explanation {
      width: 450px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      font-size: 24px;
      margin-bottom: 20px;
      box-sizing: border-box;
      > .bold {
        font-weight: 600;
      }
    }
  }
`;
const Header = styled.div`
  display: flex;
  flex-direction: column;
  > .link {
    font-size: 24px;
    margin-bottom: 10px;
    cursor: pointer;
  }
  > .title {
    font-size: 64px;
    font-weight: 600;
    color: ${(props) => props.color.mainColor || "defaultColor"};
    margin-bottom: 30px;
  }
`;
const RightWrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > .desc {
    width: 550px;
    height: 220px;
    background-color: ${(props) => props.color.subColor || "default"};
    font-size: 20px;
    box-shadow: 5px 5px 10px #e7e7e7;
    color: ${(props) => props.color.subColor_4 || "default"};
    padding: 20px;
    margin-bottom: 20px;
    border-radius: 10px;
    > .bold {
      font-size: 32px;
      font-weight: 600;
      color: black;
      margin-bottom: 10px;
    }
    overflow: scroll;
    box-sizing: border-box;
  }

  > .ps-wrapper {
    width: 700px;
    display: flex;
    flex-direction: column;
    height: 300px;
    overflow-y: scroll;
  }
  box-sizing: border-box;
`;

const PSWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;

  > .section {
    width: 330px;
    border-radius: 12px;
    box-shadow: 5px 5px 10px #e7e7e7;
    background-color: ${(props) => props.color.subColor || "#fff"};
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 15px;
    box-sizing: border-box;
    > .title {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 4px 8px;
      font-size: 17px;
      font-weight: 550;
      border-radius: 12px;
      background-color: ${(props) => props.color.mainColor || "default"};
      margin-bottom: 4px;
    }
  }
  margin-bottom: 20px;
  box-sizing: border-box;
`;

export { Wrapper, LeftWrapper, RightWrapper, Header, PSWrapper };
