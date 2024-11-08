import FormLabel from "../../components/Form/FormLabel";
import FormField from "../../components/Form/FormField";
import {
  Wrapper,
  PortfolioTitle,
  PortfolioForm,
  HiddenFileInput,
} from "./Survey.styles";
import {
  Category,
  FileLabel,
  CategoryFormWrapper,
  DateWrapper,
} from "./ProjectSurvey.styles";
import { useState } from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { addMonths } from "date-fns";
import "../../styles/DatePicker.css";

const ProjectSurvey = ({ projectNum }) => {
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
          <FormLabel htmlFor="project-photo">
            2. 프로젝트 사진을 선택해주세요.
          </FormLabel>
          <FileLabel htmlFor="photo">사진선택</FileLabel>
          <HiddenFileInput id="porject-photo" onChange={handleFileChange} />
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
          <CategoryFrom />
        </div>
      </PortfolioForm>
    </Wrapper>
  );
};
const DateForm = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };
  return (
    <div>
      <DateWrapper>
        <p>
          {startDate
            ? startDate.toLocaleDateString()
            : "Start Date not selected"}
        </p>
        ~
        <p>
          {endDate ? endDate.toLocaleDateString() : "End Date not selected"}
        </p>
      </DateWrapper>
      <DatePicker
        style={{ color: "#e4ff0d" }}
        selected={startDate}
        onChange={onChange}
        minDate={new Date()}
        maxDate={addMonths(new Date(), 5)}
        startDate={startDate}
        endDate={endDate}
        selectsRange
        inline
        showDisabledMonthNavigation
      />
    </div>
  );
};
const CategoryFrom = () => {
  return (
    <CategoryFormWrapper>
      <div className="desc">
        <p className="bold">복수 응답</p>
        <p>여러개를 골라주세요!</p>
      </div>
      <div className="category-wrapper">
        <CategoryBtn label={"프론트엔드"} />
        <CategoryBtn label={"기획"} />
        <CategoryBtn label={"백엔드"} />
        <CategoryBtn label={"PM"} />
        <CategoryBtn label={"보안"} />
        <CategoryBtn label={"DESIGN"} />
        <CategoryBtn label={"안드로이드"} />
        <CategoryBtn label={"IOS"} />
        <CategoryBtn label={"기획"} />
        <CategoryBtn label={"AI"} />
      </div>
    </CategoryFormWrapper>
  );
};

const CategoryBtn = ({ label }) => {
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    setIsActive((prev) => !prev);
  };
  return (
    <Category isActive={isActive} onClick={handleClick}>
      {label}
    </Category>
  );
};
export default ProjectSurvey;
