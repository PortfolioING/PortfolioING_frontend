import React from "react";
import {
  Wrapper,
  LeftWrapper,
  RightWrapper,
  Header,
  PSWrapper,
} from "./CreativeProject.styles";
import ProjectImg from "../../asset/project";

const ProblemSolution = ({ problem, solution, color }) => {
  console.log(problem);
  return (
    <PSWrapper color={color}>
      <div className="section">
        <div className="title">문제점</div>
        <div>{problem}</div>
      </div>
      <div className="section">
        <div className="title">해결</div>
        <div>{solution}</div>
      </div>
    </PSWrapper>
  );
};

const CreativeProject = ({
  color = { mainColor: "#0075FF", subColor: "#A1CCFF", subColor_3: "#005BC7" },
  ...props
}) => {
  const project = {
    id: 1,
    number: "01",
    project_name: "Project Title",
    image: "",
    projectDesc: "프로젝트 간단설명",
    projectFullDesc: "프로젝트 긴 설명",
    projectLink: "www.ping.com",
    date: ["2023/11/21", "2024/11/21"], // 날짜 데이터
    roles: ["프론트", "백엔드", "기획", "UX/UI"], // 역할 배열
    pns: [
      {
        problem: "프로젝트에서 해결해야 했던 문제점", // 문제점
        solution:
          "문제를 해결한 방법, 문제를 해결한 방법, 문제를 해결한 방법, 문제를 해결한 방법, 문제를 해결한 방법, 문제를 해결한 방법, 문제를 해결한 방법", // 해결 방법
      },
      {
        problem: "프로젝트에서 해결해야 했던 문제점", // 문제점
        solution:
          "문제를 해결한 방법, 문제를 해결한 방법, 문제를 해결한 방법, 문제를 해결한 방법, 문제를 해결한 방법, 문제를 해결한 방법, 문제를 해결한 방법", // 해결 방법
      },
      {
        problem: "프로젝트에서 해결해야 했던 문제점", // 문제점
        solution:
          "문제를 해결한 방법, 문제를 해결한 방법, 문제를 해결한 방법, 문제를 해결한 방법, 문제를 해결한 방법, 문제를 해결한 방법, 문제를 해결한 방법", // 해결 방법
      },
      {
        problem: "프로젝트에서 해결해야 했던 문제점", // 문제점
        solution:
          "문제를 해결한 방법, 문제를 해결한 방법, 문제를 해결한 방법, 문제를 해결한 방법, 문제를 해결한 방법, 문제를 해결한 방법, 문제를 해결한 방법", // 해결 방법
      },
      {
        problem: "프로젝트에서 해결해야 했던 문제점", // 문제점
        solution:
          "문제를 해결한 방법, 문제를 해결한 방법, 문제를 해결한 방법, 문제를 해결한 방법, 문제를 해결한 방법, 문제를 해결한 방법, 문제를 해결한 방법", // 해결 방법
      },

      {
        problem: "다른 문제점", // 문제점
        solution: "다른 해결 방법", // 해결 방법
      },
    ],
  };

  return (
    <Wrapper>
      <ProjectImg mainColor={color.mainColor} className="project-img" />
      <LeftWrapper>
        <Header color={color}>
          <div className="link">{project.projectLink}</div>
          <div className="title">{project.project_name}</div>
        </Header>
        <div className="image"></div>
        <div className="explanations">
          <div className="explanation">
            <p className="bold">역할</p>
            <p>|</p>
            <p>
              {project.roles.map((role, index) =>
                index === project.roles.length - 1 ? role : role + ", "
              )}
            </p>
          </div>
          <div className="explanation">
            <p className="bold">기간</p>
            <p>|</p>
            <p>{project.date[0] + " ~ " + project.date[1]}</p>
          </div>
        </div>
      </LeftWrapper>
      <RightWrapper color={color}>
        <div className="desc">
          <div className="bold">{project.projectDesc}</div>
          <div>{project.projectFullDesc}</div>
        </div>

        <div className="ps-wrapper">
          {project.pns.map((ps, index) => (
            <ProblemSolution
              key={index}
              problem={ps.problem}
              solution={ps.solution}
              color={color}
            />
          ))}
        </div>
      </RightWrapper>
    </Wrapper>
  );
};

export default CreativeProject;
