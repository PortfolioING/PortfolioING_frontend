import React from "react";
import { Wrapper, Content, MainContainer } from "./Simple.styles";
import {
  ProjectHeader,
  ProjectLeftSection,
  ProjectRightSection,
  DescriptionWrapper,
  PNSWrapper,
} from "./SimpleProject.styles";

import { useState } from "react";

const ProjectRight = ({ project, color }) => (
  <ProjectRightSection color={color}>
    <div className="project-image">{project.image}</div>
    <DescriptionWrapper>
      <div className="description-item">
        <div className="item-title">Date</div>
        <div>
          {project.date[0]} ~ {project.date[1]}
        </div>
      </div>
    </DescriptionWrapper>
  </ProjectRightSection>
);

const ProjectLeft = ({ project, color }) => (
  <ProjectLeftSection color={color}>
    <ProjectHeader>
      <div className="project-title">{project.project_name}</div>
      <div className="project-link">{project.projectLink}</div>
    </ProjectHeader>
    <div className="project-summary">{project.projectDesc}</div>
    <div className="project-detail">{project.projectFullDesc}</div>
    <ProjectPNS pns={project.pns} color={color} />
    <div className="roles">
      <div className="title">Part</div>
      <div className="roles-wrapper">
        {project.roles.map((role) => (
          <div>{role}</div>
        ))}
      </div>
    </div>
  </ProjectLeftSection>
);
const ProjectPNS = ({ pns, color }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    // 다음 버튼 클릭 시
    if (currentIndex == pns.length - 1) {
      setCurrentIndex(0);
    } else if (currentIndex < pns.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };
  console.log(color);
  return (
    <PNSWrapper color={color}>
      <div className="problem-solution">
        <section>
          <div className="title">문제점</div>
          <div>{pns[currentIndex].problem}</div>
        </section>
        <section>
          <div className="title">해결</div>
          <div>{pns[currentIndex].solution}</div>
        </section>
      </div>
      <div
        className="btn"
        onClick={handleNext}
        disabled={currentIndex === pns.length - 1}
      >
        {">"}
      </div>
    </PNSWrapper>
  );
};

const Color = {
  Lime: {
    mainColor: "#00FFA3",
    subColor: "black",
  },
};

const SimpleProject = ({ color = "Lime" }) => {
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
        problem: "프로젝트에서 해결해야 했던 문제점1", // 문제점
        solution:
          "문제를 해결한 방법, 문제를 해결한 방법, 문제를 해결한 방문제를 해결한 방법, 문제를 해결한 방법, 문제를 해결한 방문제를 해결한 방법, 문제를 해결한 방법, 문제를 해결한 방문제를 해결한 방법, 문제를 해결한 방법, 문제를 해결한 방문제를 해결한 방법, 문제를 해결한 방법, 문제를 해결한 방문제를 해결한 방법, 문제를 해결한 방법, 문제를 해결한 방문제를 해결한 방법, 문제를 해결한 방법, 문제를 해결한 방문제를 해결한 방법, 문제를 해결한 방법, 문제를 해결한 방문제를 해결한 방법, 문제를 해결한 방법, 문제를 해결한 방문제를 해결한 방법, 문제를 해결한 방법, 문제를 해결한 방법, 문제를 해결한 방법, 문제를 해결한 방법, 문제를 해결한 방법, 문제를 해결한 방법", // 해결 방법
      },
      {
        problem: "프로젝트에서 해결해야 했던 문제점2", // 문제점
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
  const selectedColor = Color[color];

  return (
    <Wrapper>
      <Content color={selectedColor}>
        <div className="content-label">Contents</div>
        <MainContainer color={selectedColor}>
          <ProjectLeft project={project} color={selectedColor} />
          <ProjectRight project={project} color={selectedColor} />
        </MainContainer>
      </Content>
    </Wrapper>
  );
};

export default SimpleProject;
