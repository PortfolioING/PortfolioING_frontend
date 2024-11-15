import FormLabel from "../../components/Form/FormLabel";
import FormField from "../../components/Form/FormField";
import FormInput from "../../components/Form/FormInput";
import { Wrapper, PortfolioTitle, PortfolioFormWrapper } from "./Survey.styles";
import DateForm from "./DateForm";
import CategoryForm from "./CategoryForm";
import FileUpdate from "../../components/FileUpdate/FileUpdate";
import { useState } from "react";
import { ProblemBtn, ProblemWrapper } from "./ProjectSurvey.styles";
import Plus from "../../asset/plus.svg";

const ProjectSurvey = ({ projectNum }) => {
  const [problems, setProblems] = useState([{ id: 1 }]);
  const handleAddProblem = (event) => {
    setProblems((prev) => [...prev, { id: prev.length + 1 }]);
  };
  return (
    <Wrapper>
      <PortfolioTitle>프로젝트 {projectNum}</PortfolioTitle>
      <PortfolioFormWrapper>
        <FormField
          id="project-name"
          label="1. 프로젝트 제목을 입력해주세요."
          chat="true"
        />
        <div
          style={{
            marginBottom: "20px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <FormLabel htmlFor="project-photo">
            2. 프로젝트 사진을 선택해주세요.
          </FormLabel>
          <FileUpdate />
        </div>
        <FormField
          id="project-link"
          label="3. 프로젝트 링크를 입력해주세요."
          chat="true"
        />
        <div style={{ marginBottom: "20px" }}>
          <FormLabel>4. 진행 일자를 입력해주세요.</FormLabel>
          <DateForm />
        </div>
        <FormField
          id="project-desc_line"
          label="5. 프로젝트의 한줄 소개를 입력해주세요."
          chat="true"
        />
        <FormField
          id="project-desc"
          label="6. 프로젝트의 자세한 설명을 입력해주세요."
          chat="true"
          height="210px"
        />
        <div style={{ marginBottom: "20px" }}>
          <FormLabel>7. 자신의 역할을 선택해주세요.</FormLabel>
          <CategoryForm />
        </div>
        <div style={{ marginBottom: "20px" }}>
          <FormLabel>8. 문제점과 해결 과정 및 느낀점을 입력해주세요.</FormLabel>
          {problems.map((problem) => (
            <ProjectProblem key={problem.id} problemNum={problem.id} />
          ))}
          <ProblemBtn onClick={handleAddProblem}>
            <img src={Plus} />
            <p>추가하기</p>
          </ProblemBtn>
        </div>
      </PortfolioFormWrapper>
    </Wrapper>
  );
};
const ProjectProblem = ({ problemNum }) => {
  return (
    <ProblemWrapper>
      <p>문제점 {problemNum}</p>
      <FormInput />
      <p>해결과정 {problemNum}</p>
      <FormInput />
    </ProblemWrapper>
  );
};

export default ProjectSurvey;
