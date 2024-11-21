import Menu from "../../components/MenuBar/MenuBar";
import "../../styles/CreatePortfolio.css";

import Button from "../../components/Button/Button";
import { Wrapper, PortfolioTitle } from "./Survey.styles";
import ProjectSurvey from "./ProjectSurvey";
import PortfolioForm from "./PortfolioForm";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PostProject from "../../apis/postProject";
// import PostSurvey from "../../apis/postSurvey";
// import PostPortfolio from "../../apis/postPortfolio";

const PortfolioCreation = () => {
  const [formData, setFormData] = useState({
    portfolioData: {
      name: "",
      introduction: "",
      portfolioTitle: "",
      photo: null,
    },
    projects: [],
  });

  // 포트폴리오 데이터 update
  const handlePortfolioChange = (data) => {
    setFormData((prev) => ({
      ...prev,
      portfolioData: { ...prev.portfolioData, ...data },
    }));
    console.log("포트폴리오 데이터:", formData.portfolioData); // 포트폴리오 데이터 확인
  };

  // 프로젝트 데이터 update
  const handleProjectChange = (projectId, data) => {
    setFormData((prev) => {
      const updatedProjects = prev.projects.map((project) =>
        project.id === projectId ? { ...project, ...data } : project
      );
      return { ...prev, projects: updatedProjects };
    });
    console.log("프로젝트 데이터:", formData.projects); // 프로젝트 데이터 확인
  };

  const handleAddProject = (event) => {
    setFormData((prev) => ({
      ...prev,
      projects: [
        ...prev.projects,
        {
          id: prev.projects.length + 1,
          projectName: "",
          projectPhoto: null,
          projectLink: "",
          projectDate: null,
          projectDescLine: "",
          projectDesc: "",
          category: "",
          problems: [],
        },
      ],
    }));
  };

  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
    // Project POST
    try {
      const projectIds = await PostProject(formData.projects);
      if (projectIds) {
        console.log("Project POST 성공", projectIds);
      } else {
        console.log("Project POST 실패");
      }
    } catch (error) {
      console.error("Project POST 중 오류 발생:", error);
    }

    // Survey POST
    

    // Portfolio POST


    navigate("/templates");
  };

  return (
    <Wrapper>
      <PortfolioTitle>포트폴리오 생성하기</PortfolioTitle>
      <PortfolioForm onChange={handlePortfolioChange} />

      {formData.projects.map((project) => (
        <ProjectSurvey
        key={project.id}
        projectNum={project.id}
        projectData={project}
        onChange={(data) => handleProjectChange(project.id, data)}
        // onChange={handleProjectChange}
        />
      ))}
      <Button
        btnborderradius="15px"
        onClick={handleAddProject}
        children="+ 프로젝트 추가하기"
        btnbordercolor="#000000"
        btnfontcolor="white"
        btnfontSize="20px"
        btnwidth="190px"
        btnheight="50px"
        btnbackgroundcolor="#000000"
      />
      <Button
        style={{ marginTop: "20px" }}
        btnborderradius="15px"
        children="템플릿 선택하러가기"
        btnfontSize="20px"
        btnwidth="190px"
        btnheight="50px"
        btnbackgroundcolor="#E4FF0D"
        onClick={handleClick}
      />
    </Wrapper>
  );
};

export default function CreatePortfolio() {
  return (
    <>
      <Menu />
      <PortfolioCreation />
    </>
  );
}
