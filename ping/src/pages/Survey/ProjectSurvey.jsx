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

const ProjectSurvey = ({ projectNum, onChange }) => {
  // 상태 변수 추가
  const [projectName, setProjectName] = useState("");
  const [projectPhoto, setProjectPhoto] = useState("");
  const [projectLink, setProjectLink] = useState("");
  const [projectDate, setProjectDate] = useState(null);
  const [projectDescLine, setProjectDescLine] = useState("");
  const [projectDesc, setProjectDesc] = useState("");
  const [category, setCategory] = useState("");
  const [problems, setProblems] = useState([{ id: 1, problem: "", solution: "" }]);

  const handleAddProblem = (event) => {
    setProblems((prev) => [...prev, { id: prev.length + 1, problem: "", solution: "" }]);
  };

  const handleProblemChange = (id, type, value) => {
    setProblems((prev) =>
      prev.map((problem) => (problem.id === id ? { ...problem, [type]: value } : problem))
    );
  };

  const handleProjectChange = (field, value) => {
    switch (field) {
      case "projectName":
        setProjectName(value);
        break;
      case "projectPhoto":
        setProjectPhoto(value);
        break;
      case "projectLink":
        setProjectLink(value);
        break;
      case "projectDate":
        setProjectDate(value);
        break;
      case "projectDescLine":
        setProjectDescLine(value);
        break;
      case "projectDesc":
        setProjectDesc(value);
        break;
      case "category":
        setCategory(value);
        break;
      default:
        break;
    }
    onChange({ projectName, projectPhoto, projectLink, projectDate, projectDescLine, projectDesc, category, problems });
  };

  return (
    <Wrapper>
      <PortfolioTitle>프로젝트 {projectNum}</PortfolioTitle>
      <PortfolioFormWrapper>
        <FormField
          id="project-name"
          label="1. 프로젝트 제목을 입력해주세요."
          chat="true"
          value={projectName}
          onChange={(e) => handleProjectChange("projectName", e.target.value)} // 상태 업데이트
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
          <FileUpdate onChange={(file) => handleProjectChange("projectPhoto", file)} />
        </div>
        <FormField
          id="project-link"
          label="3. 프로젝트 링크를 입력해주세요."
          chat="true"
          value={projectLink}
          onChange={(e) => handleProjectChange("projectLink", e.target.value)} // 상태 업데이트
        />
        <div style={{ marginBottom: "20px" }}>
          <FormLabel>
            4. 진행 일자를 입력해주세요.
            </FormLabel>
          <DateForm onChange={(dates) => handleProjectChange("projectDate", dates)} />
        </div>
        <FormField
          id="project-desc_line"
          label="5. 프로젝트의 한줄 소개를 입력해주세요."
          chat="true"
          value={projectDescLine}
          onChange={(e) => handleProjectChange("projectDescLine", e.target.value)} // 상태 업데이트
        />
        <FormField
          id="project-desc"
          label="6. 프로젝트의 자세한 설명을 입력해주세요."
          chat="true"
          height="210px"
          value={projectDesc}
          onChange={(e) => handleProjectChange("projectDesc", e.target.value)} // 상태 업데이트
        />
        <div style={{ marginBottom: "20px" }}>
          <FormLabel>7. 자신의 역할을 선택해주세요.</FormLabel>
          <CategoryForm onChange={(e) => handleProjectChange("category", e.target.value)} />
        </div>
        <div style={{ marginBottom: "20px" }}>
          <FormLabel>8. 문제점과 해결 과정 및 느낀점을 입력해주세요.</FormLabel>
          {problems.map((problem) => (
            <ProjectProblem
            key={problem.id}
            problemNum={problems.length}
            onChange={handleProblemChange}
            />
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
const ProjectProblem = ({ problemNum, onChange }) => {

  const handleInputChange = (type, value) => {
    onChange(problemNum, type, value); // 부모로 변경 사항 전파
  };

  return (
    <ProblemWrapper>
      <p>문제점 {problemNum}</p>
      <FormInput onChange={(e) => handleInputChange("problem", e.target.value)} />
      <p>해결과정 {problemNum}</p>
      <FormInput onChange={(e) => handleInputChange("solution", e.target.value)} />
    </ProblemWrapper>
  );
};

export default ProjectSurvey;
