import styled from "styled-components";
import Oh from "../../asset/oh";
import Hello from "../../asset/hello";

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
  position: relative;
  overflow-x: scroll;

  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
`;
const CustomOh = styled(Oh)`
  position: absolute;
  width: 100px;
  top: 45px;
  left: 1150px;
  fill: ${(props) => props.fill || "#0075FF"};
`;
const CustomHello = styled(Hello)`
  position: absolute;
  width: 1000px;
  bottom: 0;
  left: 20%;
`;

const ProjectContainer = styled.div`
  width: 340px;
  height: 180px;
  display: flex;
  flex-direction: column;
  box-shadow: 1px 1px 1px 1px
    ${(props) => (props.color ? props.color.subColor_3 : "defaultColor")};
  border-radius: 20px;
  padding: 30px;

  background-color: ${(props) =>
    props.color ? props.color.subColor : "defaultColor"};
  > div {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }
  > .number {
    font-size: 40px;
    font-weight: 600;
    color: ${(props) => (props.color ? props.color.mainColor : "defaultColor")};
  }
  > .title {
    font-size: 20px;
    font-weight: 600;
  }
  > .desc,
  .categories {
    font-size: 14px;
    color: ${(props) =>
      props.color ? props.color.subColor_4 : "defaultColor"};
  }
  > .categories {
    display: flex;
    width: 100%;
    justify-content: flex-start;
    gap: 5px;
  }
  box-sizing: border-box;
`;

export {
  Wrapper,
  LeftWrapper,
  RightWrapper,
  Header,
  ProjectWrapper,
  CustomOh,
  CustomHello,
  ProjectContainer,
};
