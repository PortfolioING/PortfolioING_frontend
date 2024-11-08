import Menu from "../../components/MenuBar/MenuBar";
import "../../styles/CreatePortfolio.css";
import Plus from "../../asset/plus.svg";

import FormLabel from "../../components/Form/FormLabel";
import FormField from "../../components/Form/FormField";
import Button from "../../components/Button/Button";
import {
  Wrapper,
  PortfolioTitle,
  PortfolioForm,
  HiddenFileInput,
  FileLabel,
} from "./Survey.styles";

import { useState } from "react";

import ProjectSurvey from "./ProjectSurvey";
import { useNavigate } from "react-router-dom";

const PortfolioCreation = () => {
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log("Selected file:", file.name); // 파일 이름 출력
    }
  };

  const [projects, setProjects] = useState([]);
  const handleAddProject = (event) => {
    setProjects((prevProjects) => [
      ...prevProjects,
      { id: prevProjects.length + 1 },
    ]);
  };
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/templates");
  };

  return (
    <Wrapper>
      <PortfolioTitle>포트폴리오 생성하기</PortfolioTitle>
      <PortfolioForm>
        <FormField id="name" label="1. 이름을 입력해주세요." chat="true" />
        <FormField
          id="introduction"
          label="2. 자기소개를 해주세요."
          chat="true"
          height="200px"
        />

        <div style={{ marginBottom: "20px" }}>
          <FormLabel htmlFor="photo">3. 본인의 사진을 선택해주세요.</FormLabel>
          <FileLabel htmlFor="photo">
            <img src={Plus} alt="plus img" />
          </FileLabel>
          <HiddenFileInput id="photo" onChange={handleFileChange} />
        </div>
        <FormField
          id="portfolio-title"
          label=" 4. 포트폴리오 제목을 입력해주세요."
          chat="true"
        />
      </PortfolioForm>

      <Button
        btnborderradius="20px"
        onClick={handleAddProject}
        childern="+ 프로젝트 추가하기"
        btnbordercolor="#000000"
        btnfontcolor="white"
        btnfontSize="20px"
        btnwidth="190px"
        btnheight="50px"
        btnbackgroundcolor="#000000"
      />
      {projects.map((project) => (
        <ProjectSurvey key={project.id} projectNum={project.id} />
      ))}
      <Button
        style={{ marginTop: "20px" }}
        btnborderradius="20px"
        childern="포토폴리오 만들기 >"
        btnfontSize="20px"
        btnwidth="190px"
        btnheight="50px"
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
