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
      <div className="title">{props.project_name}</div>
      <div className="desc">{props.projectDesc}</div>
      <div className="roles">
        {props.roles.map((role) => (
          <p>#{role}</p>
        ))}
      </div>
    </ProjectContainer>
  );
};

const Creative = ({ color = "blue" }) => {
  const userIntro = {
    title: "나의 포토폴리오",
    introduce: "개쩌는 프론트개발자",
    name: "이하민",
    image: "",
    projects: [
      {
        id: 1,
        number: "01",
        project_name: "Project Title",
        image: "",
        projectDesc: "프로젝트 간단설명",
        projectFullDesc: "프로젝트 긴 설명",
        projectLink: "www.ping.com",
        date: ["2023/11/21", "2024/11/21"], // 날짜 데이터가 필요
        roles: ["프론트", "백엔드", "기획", "UX/UI"], // 배열로
        pns: [
          {
            problem: "프로젝트에서 해결해야 했던 문제점", // 문제점
            solution: "문제를 해결한 방법", // 해결 방법
          },
          {
            problem: "프로젝트에서 해결해야 했던 문제점", // 문제점
            solution: "문제를 해결한 방법", // 해결 방법
          },
        ],
      },
      {
        id: 2,
        number: "02",
        project_name: "Project Title",
        image: "",
        projectDesc: "프로젝트 간단설명",
        projectFullDesc: "프로젝트 긴 설명",
        projectLink: "www.ping.com",
        date: ["2023/11/21", "2024/11/21"], // 날짜 데이터가 필요
        roles: ["프론트", "백엔드", "기획", "UX/UI"], // 배열로
        pns: [
          {
            problem: "프로젝트에서 해결해야 했던 문제점", // 문제점
            solution: "문제를 해결한 방법", // 해결 방법
          },
          {
            problem: "프로젝트에서 해결해야 했던 문제점", // 문제점
            solution: "문제를 해결한 방법", // 해결 방법
          },
        ],
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
          <div className="name">
            안녕하세요?
            <br />
            {userIntro.name}입니다.
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
          {userIntro.image == "" ? <Ping /> : <img src={userIntro.image} />}
        </div>
      </RightWrapper>
    </Wrapper>
  );
};

export default Creative;
