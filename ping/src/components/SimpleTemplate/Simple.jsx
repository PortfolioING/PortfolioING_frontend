import React, { useState, useEffect } from "react";
import { Wrapper, Content, MainContainer } from "./Simple.styles";
import {
  PortfolioContent,
  ProjectCard,
  ImgWrapper,
} from "./SimplePortfolio.styles";
import SimpleBtn from "../../asset/SimpleBtn";
import { useNavigate } from "react-router-dom";
import GetPortfolio from "../../apis/GetPortfolio";
import PortfolioButton from "../porfolioButton/PortfolioButton";

const Color = {
  Lime: {
    mainColor: "#00FFA3",
    subColor: "black",
  },
};

const ProjectCardComponent = ({ project, color }) => {
  const navigate = useNavigate();
  //console.log(project);
  const handleClick = () => {
    navigate(`/template/1/project/${project.projectId}`);
  };

  // 데이터 유효성 검사 및 기본값 설정

  const projectName = project.projectName || "프로젝트 이름 없음";
  const projectDesc = project.projectDesc || "설명이 없습니다.";
  const roles = project.roles || []; // 기본값을 빈 배열로 설정

  return (
    <ProjectCard onClick={handleClick} color={color}>
      <div className="project-number">{project.number}</div>
      <div className="project-description">
        <p className="project-title">{projectName}</p>
        <p>{projectDesc}</p>
      </div>
      <SimpleBtn className="project-btn" fill={color.mainColor} />
      <div className="project-roles">
        {roles.length > 0 ? (
          roles.map((role, index) => (
            <div key={index} className="role">
              {role}
            </div>
          ))
        ) : (
          <div className="role">역할 없음</div>
        )}
      </div>
    </ProjectCard>
  );
};

const Portfolio = ({ color = "Lime" }) => {
  const [portfolioInfo, setPortfolioInfo] = useState(null); // 상태 관리
  const selectedColor = Color[color];

  useEffect(() => {
    const fetchPortfolio = async () => {
      const portfolioId = sessionStorage.getItem("portfolioId");
      if (!portfolioId) {
        console.error("포트폴리오 ID가 없습니다.");
        return;
      }

      try {
        const result = await GetPortfolio(portfolioId);
        setPortfolioInfo(result); // 상태에 저장
        console.log(result);

        console.log("포폴 가져옴");
      } catch (error) {
        console.error("설문 데이터를 가져오는 중 오류 발생:", error);
      }
    };

    fetchPortfolio();
  }, []);

  if (!portfolioInfo) {
    return <div>데이터를 불러오는 중...</div>;
  }
  console.log(portfolioInfo);
  const { title } = portfolioInfo;

  const {
    introduce,
    name,
    image,
    projects = [],
  } = portfolioInfo.surveyDto || {};

  return (
    <>
      <PortfolioButton />
      <Wrapper>
        <Content color={selectedColor}>
          <div className="portfolio-label">Portfolio</div>
          <MainContainer>
            <PortfolioContent color={selectedColor}>
              <div className="portfolio-title">
                {title || "포트폴리오 제목 없음"}
              </div>
              <section className="introduce-section">
                <p className="section-title">Introduce Me</p>
                <div className="introduce-content">
                  {introduce || "소개 정보가 없습니다."}
                </div>
              </section>
              <section className="project-section">
                <p className="section-title">contents</p>
                <div className="project-list">
                  {projects.length > 0 ? (
                    projects.map((project, index) => (
                      <ProjectCardComponent
                        key={project.projectId}
                        project={{ ...project, number: index + 1 }}
                        color={selectedColor}
                      />
                    ))
                  ) : (
                    <p>등록된 프로젝트가 없습니다.</p>
                  )}
                </div>
              </section>
            </PortfolioContent>
            <ImgWrapper color={selectedColor}>
              <div className="profile-image">{image}</div>
              <div className="profile-name">{name}</div>
            </ImgWrapper>
          </MainContainer>
        </Content>
      </Wrapper>
    </>
  );
};

export default Portfolio;
