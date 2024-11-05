import Menu from "../../components/MenuBar/MenuBar";
import "../../styles/CreatePortfolio.css";
import Plus from "../../asset/plus.svg";

import Label from "../../components/Form/FormLabel";
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

export default function CreatePortfolio() {
  return (
    <>
      <Menu />
      <PortfolioCreation />
    </>
  );
}

const Project = ({ projectNum }) => {
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log("Selected file:", file.name); // 파일 이름 출력
    }
  };
  return (
    <Wrapper>
      <PortfolioTitle>프로젝트 {projectNum}</PortfolioTitle>
      <PortfolioForm>
        <FormField
          id="project-name"
          label="1. 프로젝트 제목을 입력해주세요."
          chat="true"
        />

        <div style={{ marginBottom: "20px" }}>
          <Label htmlFor="porject-photo">
            2. 프로젝트 사진을 선택해주세요.
          </Label>
          <FileLabel htmlFor="photo">사진선택</FileLabel>
          <HiddenFileInput id="porject-photo" onChange={handleFileChange} />
        </div>
        <FormField
          id="project-link"
          label="3. 프로젝트 링크를 입력해주세요."
          chat="true"
        />
      </PortfolioForm>
    </Wrapper>
  );
};

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
          <Label htmlFor="photo">3. 본인의 사진을 선택해주세요.</Label>
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
        btnwidth="200px"
        btnheight="50px"
        btnbackgroundcolor="#000000"
      />
      {projects.map((project) => (
        <Project key={project.id} projectNum={project.id} />
      ))}
    </Wrapper>
  );
};
