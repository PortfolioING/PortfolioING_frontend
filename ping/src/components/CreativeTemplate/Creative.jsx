import React from "react";
import {
  Wrapper,
  LeftWrapper,
  RightWrapper,
  Header,
  ProjectWrapper,
  CustomOh,
  CustomHello,
  ProjectContainer,
} from "./Creative.styles";
import { useNavigate } from "react-router-dom";

import Ping from "../../asset/ping";
import Face from "../../asset/face.svg";

const Color = {
  blue: {
    mainColor: "#0075FF",
    subColor: "#A1CCFF",
    subColor_2: "#D9D9D9",
    subColor_3: "#005BC7",
    subColor_4: "#848484",
  },
};
const Project = ({ color, ...props }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    //navigate("/templete2-project/" + props.id); => 서버에세 해당 프로젝트 받아와야함
    navigate("/template2-project");
  };
  return (
    <ProjectContainer color={color} onClick={handleClick}>
      <div className="number">{props.number}</div>
      <div className="title">{props.title}</div>
      <div className="desc">{props.desc}</div>
      <div className="categories">
        {props.categories.map((category) => (
          <p>#{category}</p>
        ))}
      </div>
    </ProjectContainer>
  );
};

const Creative = ({ color = "blue" }) => {
  const userIntro = {
    title: "Portfolio title",
    introduce: "개쩌는 프론트개발자",
    name: "Name",
    img: "",
    projects: [
      {
        id: 1,
        number: "01",
        title: "Project Title",
        desc: "이거슨 프로젝트일까나..?몰라몰라몰라몰라몰라몰라몰라몰라",
        categories: ["프론트", "집갈래"],
      },
      {
        id: 2,
        number: "02",
        title: "Project Title",
        desc: "이거슨 프로젝트일까나..?",
        categories: ["프론트", "집갈래", "자고싶다"],
      },
      {
        id: 3,
        number: "03",
        title: "Project Title",
        desc: "이거슨 프로젝트일까나..?몰라몰라몰라몰라몰라몰라몰라몰라",
        categories: ["프론트", "집갈래"],
      },
      {
        id: 4,
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
      <CustomOh fill={selectedColor.mainColor} />
      <CustomHello
        subColor1={selectedColor.subColor}
        subColor2={selectedColor.subColor_3}
      />
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
            <Project key={project.number} color={selectedColor} {...project} />
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
