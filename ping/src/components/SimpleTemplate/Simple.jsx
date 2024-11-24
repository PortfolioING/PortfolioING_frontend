import React from "react";
import { Wrapper, Content, MainContainer } from "./Simple.styles";
import {
  PortfolioContent,
  ProjectCard,
  ImgWrapper,
} from "./SimplePortfolio.styles";
import SimpleBtn from "../../asset/SimpleBtn";
import { useNavigate } from "react-router-dom";
const Color = {
  Lime: {
    mainColor: "#00FFA3",
    subColor: "black",
  },
};
const ProjectCardComponent = ({ project, color }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/template1-project");
  };

  return (
    <ProjectCard onClick={handleClick} color={color}>
      <div className="project-number">{project.number}</div>
      <div className="project-description">
        <p className="project-title">{project.projectName}</p>
        <p>{project.projectDesc}</p>
      </div>
      <SimpleBtn className="project-btn" fill={color.mainColor} />
      <div className="project-roles">
        {project.roles.map((role, index) => (
          <div key={index} className="role">
            {role}
          </div>
        ))}
      </div>
    </ProjectCard>
  );
};

const Portfolio = ({ color = "Lime" }) => {
  const userIntro = {
    title: "나의 포트폴리오",
    introduce: "열정적인 프론트엔드 개발자",
    name: "이하민",
    image: "",
    projects: [
      {
        id: 1,
        number: "01",
        projectName: "Project Title 1",
        image: "",
        projectDesc:
          "프로젝트 간단 설명 1,프로젝트 간단 설명 1,프로젝트 간단 설명 1",
        projectFullDesc: "프로젝트 상세 설명 1",
        projectLink: "www.example1.com",
        date: ["2023/11/21", "2024/11/21"],
        roles: ["Frontend", "Backend", "Planning", "UX/UI"],
      },
      {
        id: 1,
        number: "01",
        projectName: "Project Title 1",
        image: "",
        projectDesc: "프로젝트 간단 설명 1",
        projectFullDesc: "프로젝트 상세 설명 1",
        projectLink: "www.example1.com",
        date: ["2023/11/21", "2024/11/21"],
        roles: ["Frontend", "Backend", "Planning", "UX/UI"],
      },
      {
        id: 1,
        number: "01",
        projectName: "Project Title 1",
        image: "",
        projectDesc: "프로젝트 간단 설명 1",
        projectFullDesc: "프로젝트 상세 설명 1",
        projectLink: "www.example1.com",
        date: ["2023/11/21", "2024/11/21"],
        roles: ["Frontend", "Backend", "Planning", "UX/UI"],
      },
      {
        id: 1,
        number: "01",
        projectName: "Project Title 1",
        image: "",
        projectDesc: "프로젝트 간단 설명 1",
        projectFullDesc: "프로젝트 상세 설명 1",
        projectLink: "www.example1.com",
        date: ["2023/11/21", "2024/11/21"],
        roles: ["Frontend", "Backend", "Planning", "UX/UI"],
      },
      {
        id: 1,
        number: "01",
        projectName: "Project Title 1",
        image: "",
        projectDesc: "프로젝트 간단 설명 1",
        projectFullDesc: "프로젝트 상세 설명 1",
        projectLink: "www.example1.com",
        date: ["2023/11/21", "2024/11/21"],
        roles: ["Frontend", "Backend", "Planning", "UX/UI"],
      },

      {
        id: 2,
        number: "02",
        projectName: "Project Title 2",
        image: "",
        projectDesc: "프로젝트 간단 설명 2",
        projectFullDesc: "프로젝트 상세 설명 2",
        projectLink: "www.example2.com",
        date: ["2023/11/21", "2024/11/21"],
        roles: ["Frontend", "Planning"],
      },
    ],
  };
  const selectedColor = Color[color];
  return (
    <Wrapper>
      <Content color={selectedColor}>
        <div className="portfolio-label">Portfolio</div>
        <MainContainer>
          <PortfolioContent color={selectedColor}>
            <div className="portfolio-title">{userIntro.title}</div>
            <section className="introduce-section">
              <p className="section-title">Introduce Me</p>
              <div className="introduce-content">{userIntro.introduce}</div>
            </section>
            <section className="project-section">
              <p className="section-title">contents</p>
              <div className="project-list">
                {userIntro.projects.map((project) => (
                  <ProjectCardComponent
                    key={project.id}
                    project={project}
                    color={selectedColor}
                  />
                ))}
              </div>
            </section>
          </PortfolioContent>
          <ImgWrapper color={selectedColor}>
            <div className="profile-image">{userIntro.image}</div>
            <div className="profile-name">{userIntro.name}</div>
          </ImgWrapper>
        </MainContainer>
      </Content>
    </Wrapper>
  );
};

export default Portfolio;
