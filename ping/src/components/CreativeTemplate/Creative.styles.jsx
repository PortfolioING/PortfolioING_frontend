import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 100vh;
  padding: 30px;
  box-sizing: border-box;
  overflow-y: scroll;
  background-color: ${(props) =>
    props.color ? props.color.mainColor : "defaultColor"};

  > .face {
    position: absolute;
    width: 200px;
    top: 10px;
    left: 830px;
  }
  > .oh {
    position: absolute;
    width: 100px;
    top: 45px;
    left: 1150px;
  }
`;
const LeftWrapper = styled.div`
  width: 75%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;
const RightWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  > .user-img {
    width: 300px;
    height: 300px;
    background-color: white;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 140px;
  }
`;
const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  color: white;
  > .introduce {
    font-size: 28px;
    margin-bottom: 10px;
  }
  > .title {
    font-size: 96px;
  }
  margin-bottom: 20px;
`;
const ProjectWrapper = styled.div`
  display: grid;
  width: 900px;
  height: 400px;
  overflow-x: scroll;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
`;
export { Wrapper, LeftWrapper, RightWrapper, Header, ProjectWrapper };
