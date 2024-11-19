import React, { useState } from "react";
import FormLabel from "../../components/Form/FormLabel";
import FormField from "../../components/Form/FormField";
import FileUpdate from "../../components/FileUpdate/FileUpdate";
import { PortfolioFormWrapper } from "./Survey.styles";
const PortfolioForm = () => {
  const [name, setName] = useState(""); // name 상태
  const [introduction, setIntroduction] = useState(""); // introduction 상태
  const [portfolioTitle, setPortfolioTitle] = useState(""); // title 상태 저장

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleIntroductionChange = (e) => {
    setIntroduction(e.target.value);
  };
  const handlePortfolioTitleChange = (e) => {
    setPortfolioTitle(e.target.value);
  };

  return (
    <PortfolioFormWrapper>
      <FormField
      id="name"
      label="1. 이름을 입력해주세요."
      chat="true"
      value={introduction}
      onChange={handleIntroductionChange} // onChange handler 추가
      />
      <FormField

        id="introduction"
        label="2. 자기소개를 해주세요."
        chat="true"
        height="200px"
        value={name}
        onChange={handleNameChange}
      />

      <div
        style={{
          marginBottom: "20px",
        }}
      >
        <FormLabel htmlFor="photo">3. 본인의 사진을 선택해주세요.</FormLabel>
        <FileUpdate />
      </div>

      <FormField
        id="portfolio-title"
        label="4. 포트폴리오 제목을 입력해주세요."
        chat="true"
        value={name}
        onChange={handleNameChange}
      />
    </PortfolioFormWrapper>
  );
};
export default PortfolioForm;
