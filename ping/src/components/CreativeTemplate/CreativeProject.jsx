import React from "react";
import {
  Wrapper,
  LeftWrapper,
  RightWrapper,
  Header,
} from "./CreativeProject.styles";

const CreativeProject = () => {
  const project = {
    id: 1,
    number: "01",
    title: "대충 개쩌는 프로젝트",
    subtitle: "쉽게 무언가를 만들 수 있는",
    desc: "이거슨 프로젝트일까나..?몰라몰라몰라몰라몰라몰라몰라몰라",

    categories: ["프론트", "집갈래"],
    link: "www.프로젝트링크.com",
  };
  return (
    <Wrapper>
      <LeftWrapper>
        <Header></Header>
      </LeftWrapper>
      <RightWrapper></RightWrapper>
    </Wrapper>
  );
};

export default CreativeProject;
