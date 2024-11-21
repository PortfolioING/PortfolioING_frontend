import React from "react";
import {
  Wrapper,
  LeftWrapper,
  RightWrapper,
  Header,
  ProjectWrapper,
} from "./Creative.styles";
import CreativeProject from "./CreativeProject";
import Ping from "../../asset/ping";
import Face from "../../asset/face.svg";
import Oh from "../../asset/oh";
const Color = {
  blue: {
    mainColor: "#0075FF",
    subColor: "#A1CCFF",
    subColor_2: "#D9D9D9",
  },
};
const Creative = ({ color = "blue" }) => {
  const userIntro = {
    title: "Portfolio title",
    introduce: "개쩌는 프론트개발자",
    name: "Name",
    img: "",
    projects: [
      {
        number: "01",
        title: "Project Title",
        desc: "이거슨 프로젝트일까나..?몰라몰라몰라몰라몰라몰라몰라몰라",
        categories: ["프론트", "집갈래"],
      },
      {
        number: "02",
        title: "Project Title",
        desc: "이거슨 프로젝트일까나..?",
        categories: ["프론트", "집갈래", "자고싶다"],
      },
      {
        number: "03",
        title: "Project Title",
        desc: "이거슨 프로젝트일까나..?몰라몰라몰라몰라몰라몰라몰라몰라",
        categories: ["프론트", "집갈래"],
      },
      {
        number: "04",
        title: "Project Title",
        desc: "이거슨 프로젝트일까나..?몰라몰라몰라몰라몰라몰라몰라몰라",
        categories: ["프론트", "집갈래"],
      },
      {
        number: "05",
        title: "Project Title",
        desc: "이거슨 프로젝트일까나..?몰라몰라몰라몰라몰라몰라몰라몰라",
        categories: ["프론트", "집갈래"],
      },
    ],
  };
  const selectedColor = Color[color] || Color.blue;

  return (
    <Wrapper color={selectedColor}>
      <img className="face" src={Face} />
      <Oh fill={selectedColor.mainColor} className="oh" />
      <LeftWrapper>
        <Header>
          <div className="introduce">{userIntro.introduce}</div>
          <div className="title">
            안녕하세요?
            <br />
            {userIntro.title}입니다.
          </div>
        </Header>
        <ProjectWrapper>
          {userIntro.projects.map((project) => (
            <CreativeProject
              key={project.number}
              color={selectedColor}
              {...project}
            />
          ))}
        </ProjectWrapper>
      </LeftWrapper>
      <RightWrapper>
        <div className="user-img">
          {userIntro.img == "" ? <Ping /> : <img src={userIntro.img} />}
        </div>
      </RightWrapper>
    </Wrapper>
  );
};

export default Creative;
