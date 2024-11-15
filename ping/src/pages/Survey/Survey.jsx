import Menu from "../../components/MenuBar/MenuBar";
import "../../styles/CreatePortfolio.css";

import Button from "../../components/Button/Button";
import { Wrapper, PortfolioTitle } from "./Survey.styles";
import ProjectSurvey from "./ProjectSurvey";
import PortfolioForm from "./PortfolioForm";

import { useState } from "react";

import { useNavigate } from "react-router-dom";

const PortfolioCreation = () => {
  const [projects, setProjects] = useState([]);
  const handleAddProject = (event) => {
    setProjects((prevProjects) => [
      ...prevProjects,
      { id: prevProjects.length + 1 },
    ]);
  };
  const navigate = useNavigate();
  const handleClick = () => {
    //서버에 설문 전송 코드 추가
    navigate("/templates");
  };

  return (
    <Wrapper>
      <PortfolioTitle>포트폴리오 생성하기</PortfolioTitle>
      <PortfolioForm />

      {projects.map((project) => (
        <ProjectSurvey key={project.id} projectNum={project.id} />
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
