import Menu from "../../components/MenuBar/MenuBar";
import "../../styles/CreatePortfolio.css";

import Button from "../../components/Button/Button";
import { Wrapper, PortfolioTitle } from "./Survey.styles";
import ProjectSurvey from "./ProjectSurvey";
import PortfolioForm from "./PortfolioForm";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PostProject from "../../apis/postProject";
import PostSurvey from "../../apis/postSurvey";

import PostPortfolio from "../../apis/postPortfolio";
import Guide from "../../components/Guide/Guide";

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

  const handlePortfolioChange = (data) => {
    setFormData((prev) => ({
      ...prev,
      portfolioData: { ...prev.portfolioData, ...data },
    }));
  };
  const handleProjectChange = (projectId, data) => {
    setFormData((prev) => {
      const updatedProjects = prev.projects.map((project) =>
        project.id === projectId ? { ...project, ...data } : project
      );
      return { ...prev, projects: updatedProjects };
    });
  };

  const handleAddProject = (event) => {
    setFormData((prev) => ({
      ...prev,
      projects: [
        ...prev.projects,
        {
          id: prev.projects.length + 1,
          projectName: "",
          projectPhoto: "",
          projectLink: "",
          projectDate: ["", ""],
          projectDescLine: "",
          projectDesc: "",
          category: [""],
          problems: [""],
        },
      ],
    }));
  };

  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();

    let projectIds;
    let surveyId;

    // Project POST
    try {
      projectIds = await PostProject(formData.projects);
      if (projectIds) {
        console.log("Project POST 성공", projectIds);
      } else {
        console.log("Project POST 실패");
        return;
      }
    } catch (error) {
      console.error("Project POST 중 오류 발생:", error);
      return;
    }

    try {
      const surveyResponse = await PostSurvey(
        formData.portfolioData,
        projectIds
      );
      if (surveyResponse) {
        console.log("Survey POST 성공", surveyResponse);
        surveyId = surveyResponse.surveyId;
      } else {
        console.log("Survey POST 실패");
        return;
      }
    } catch (error) {
      console.error("Survey POST 중 오류 발생:", error);
      return;
    }

    // Portfolio POST
    const loginId = sessionStorage.getItem("userId");
    try {
      const portfolioResponse = await PostPortfolio(
        loginId,
        surveyId,
        formData
      );
      console.log(portfolioResponse);
      if (portfolioResponse) {
        console.log("Portfolio POST 성공", portfolioResponse);

        sessionStorage.setItem("portfolioId", portfolioResponse.portfolioId);

        navigate("/templates");
      } else {
        console.log("Portfolio POST 실패");
      }
    } catch (error) {
      console.error("Portfolio POST 중 오류 발생:", error);
    }
  };
  const [guideText, setGuideText] = useState("당신을 도와드릴게.");

  return (
    <>
      <Guide text={guideText} />
      <Wrapper>
        <PortfolioTitle>포트폴리오 생성하기</PortfolioTitle>
        <PortfolioForm
          onChange={handlePortfolioChange}
          setGuideText={setGuideText}
        />

        {formData.projects.map((project) => (
          <ProjectSurvey
            key={project.id}
            projectNum={project.id}
            projectData={project}
            onChange={(data) => handleProjectChange(project.id, data)}
            setGuideText={setGuideText}
          />
        ))}
        <Button
          onClick={handleAddProject}
          children="+ 프로젝트 추가하기"
          mainColor="BlackWhite"
          size="lg"
        />
        <Button
          style={{ marginTop: "20px" }}
          children="템플릿 선택하러가기"
          mainColor="LimeBlack"
          size="lg"
          onClick={handleClick}
        />
      </Wrapper>
    </>
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
