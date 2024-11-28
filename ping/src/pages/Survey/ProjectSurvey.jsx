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
import FormTextArea from "../../components/Form/FormTextArea";
const ProjectSurvey = ({ projectNum, onChange, setGuideText }) => {
  // 상태 변수 추가
  const [projectName, setProjectName] = useState("");
  const [projectPhoto, setProjectPhoto] = useState("");
  const [projectDescLine, setProjectDescLine] = useState("");
  const [projectDesc, setProjectDesc] = useState("");
  const [projectLink, setProjectLink] = useState("");
  const [projectDate, setProjectDate] = useState(null);
  const [category, setCategory] = useState([""]);
  const [problems, setProblems] = useState([
    { id: 1, problem: "", solution: "" },
  ]);

  const handleAddProblem = (event) => {
    setProblems((prev) => [
      ...prev,
      { id: prev.length + 1, problem: "", solution: "" },
    ]);
  };

  const handleProblemChange = (id, type, value) => {
    setProblems((prev) =>
      prev.map((problem) =>
        problem.id === id ? { ...problem, [type]: value } : problem
      )
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
    onChange({
      projectName,
      projectPhoto,
      projectLink,
      projectDate,
      projectDescLine,
      projectDesc,
      category,
      problems,
    });
  };
  const handleInputClick = (text) => {
    console.log("in");
    setGuideText(text);
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
          size="xl"
          onChange={(e) => handleProjectChange("projectName", e.target.value)}
          onFocus={() => handleInputClick("프로젝트 제목을 적어주세요!")}
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
          <FileUpdate
            onFocus={() =>
              handleInputClick("프로젝트의 메인 사진을 넣어주세요!")
            }
            onChange={(file) => handleProjectChange("projectPhoto", file)}
          />
        </div>
        <FormField
          id="project-link"
          label="3. 프로젝트 링크를 입력해주세요."
          chat="true"
          value={projectLink}
          size="xl"
          onFocus={() => handleInputClick("깃허브 링크를 적어주세요!")}
          onChange={(e) => handleProjectChange("projectLink", e.target.value)} // 상태 업데이트
        />
        <div style={{ marginBottom: "20px" }}>
          <FormLabel>4. 진행 일자를 입력해주세요.</FormLabel>
          <DateForm
            onFocus={() =>
              handleInputClick(
                "오늘로부터 3년 전까지의 프로젝트를 등록할 수 있어요!"
              )
            }
            onChange={(dates) => handleProjectChange("projectDate", dates)}
          />
        </div>
        <FormField
          id="project-desc_line"
          label="5. 프로젝트의 한줄 소개를 입력해주세요."
          chat="true"
          value={projectDescLine}
          size="xl"
          onFocus={() =>
            handleInputClick("프로젝트의 이름과 목적 및 성과를 적으면 좋아요!")
          }
          onChange={(e) =>
            handleProjectChange("projectDescLine", e.target.value)
          } // 상태 업데이트
        />
        <div style={{ marginBottom: "20px" }}>
          <FormLabel>6. 프로젝트의 자세한 설명을 입력해주세요.</FormLabel>
          <FormTextArea
            onClick={() =>
              handleInputClick(
                "프로젝트에서 본인이 개발한 부분에 대해 사용한 기술 스택과 함께 설명하면 좋아요! 설명은 필요한 것만 심플하게 하는 게 좋아요."
              )
            }
            chat="true"
            value={projectDesc}
            onChange={(e) => handleProjectChange("projectDesc", e.target.value)}
          />
        </div>

        <div style={{ marginBottom: "20px" }}>
          <FormLabel>7. 자신의 역할을 선택해주세요.</FormLabel>
          <CategoryForm
            onClick={() => handleInputClick("기여한 모든 역할을 클릭해주세요!")}
            onChange={(categories) =>
              handleProjectChange("category", categories)
            }
          />
        </div>
        <div style={{ marginBottom: "20px" }}>
          <FormLabel>8. 문제점과 해결 과정 및 느낀점을 입력해주세요.</FormLabel>
          {problems.map((problem) => (
            <ProjectProblem
              onClick={() =>
                handleInputClick(
                  "본인이 겪은 문제와 이를 해결하기 위해 시도한 것들에 대한 비교, 그리고 마침내 해결하는 과정까지 어떻게 도달했는지 작성하면 좋아요!"
                )
              }
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
const ProjectProblem = ({ problemNum, onChange, onClick }) => {
  const handleInputChange = (type, value) => {
    onChange(problemNum, type, value); // 부모로 변경 사항 전파
  };

  return (
    <ProblemWrapper>
      <p>문제점 {problemNum}</p>
      <FormInput
        onClick={onClick}
        onChange={(e) => handleInputChange("problem", e.target.value)}
      />
      <p>해결과정 {problemNum}</p>
      <FormInput
        onClick={onClick}
        onChange={(e) => handleInputChange("solution", e.target.value)}
      />
    </ProblemWrapper>
  );
};

export default ProjectSurvey;
