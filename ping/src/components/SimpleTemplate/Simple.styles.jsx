import styled from "styled-components";
const Wrapper = styled.div`
  background-color: black;
  width: 100%;
  height: 100vh;
`;

const Content = styled.div`
  margin: 0 auto;
  width: 1012px;
  height: inherit;
  border-left: 2px solid #00ffa3;
  border-right: 2px solid #00ffa3;

  display: flex;
  flex-direction: column;
  .label {
    display: flex;
    align-items: flex-end;
    padding: 10px;
    height: 50px;
    color: white;
    border-bottom: 1px solid #00ffa3;
    box-sizing: border-box;
  }
  .content-label {
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #00ffa3;
    border-bottom: 1px solid #00ffa3;
    font-size: 28px;
    font-weight: 700;
  }
  .left {
    height: inherit;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #00ffa3;

    font-size: 30px;

    > .img {
      border: 1px solid #00ffa3;
      width: 350px;
      height: 350px;
      border-radius: 50%;
      margin-bottom: 20px;
    }
  }
`;
const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px 0 0 30px;
  > .title {
    font-size: 55px;
    font-weight: 400;
    color: white;
    margin-bottom: 20px;
  }
  > section {
    .content-title {
      font-size: 25px;
      font-weight: 400;
      color: #00ffa3;
      margin-bottom: 10px;
    }
  }
  .introduce-div {
    margin-bottom: 20px;
    > .introduce-desc {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 350px;
      height: 90px;
      border-radius: 30px;
      font-size: 25px;
      background-color: #00ffa3;
      color: black;
    }
  }
`;
const ProjectWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 450px;
  height: 70px;
  color: white;
  border-top: 1px solid #00ffa3;
  border-bottom: 1px solid #00ffa3;
  box-sizing: border-box;
  > .desc {
    height: inherit;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    font-size: 15px;
    > .title {
      font-size: 20px;
    }
  }
  > .category-wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    > div {
      display: flex;
      justify-content: center;
      align-items: center;
      border: 0.5px solid #00ffa3;
      width: 72px;
      height: 20px;
      border-radius: 10px;
      font-size: 10px;
      color: #00ffa3;
      margin-bottom: 3px;
    }
  }
`;
export { Wrapper, Content, MainContent, ProjectWrapper };
