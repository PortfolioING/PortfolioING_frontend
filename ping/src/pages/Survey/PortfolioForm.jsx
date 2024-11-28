import React from "react";
import FormLabel from "../../components/Form/FormLabel";
import FormField from "../../components/Form/FormField";
import FileUpdate from "../../components/FileUpdate/FileUpdate";
import { PortfolioFormWrapper } from "./Survey.styles";

const PortfolioForm = ({ onChange, setGuideText }) => {
  const handleNameChange = (e) => {
    onChange({ name: e.target.value });
  };
  const handleIntroductionChange = (e) => {
    onChange({ introduction: e.target.value });
  };
  const handlePortfolioTitleChange = (e) => {
    onChange({ portfolioTitle: e.target.value });
  };
  const handlePhotoChange = (file) => {
    onChange({ photo: file });
  };
  const handleInputClick = (text) => {
    console.log("in");
    setGuideText(text);
  };
  return (
    <PortfolioFormWrapper>
      <FormField
        id="name"
        label="1. 이름을 입력해주세요."
        chat="true"
        onChange={handleNameChange}
        size="xl"
        onFocus={() => handleInputClick("이름을 적어주세요")}
      />
      <FormField
        id="introduction"
        label="2. 자기소개를 해주세요."
        chat="true"
        height="200px"
        onChange={handleIntroductionChange}
        size="xl"
        onFocus={() =>
          handleInputClick(
            "가치관은 짧게 작성하고, 지원하려는 곳에 매력적으로 보일 수 있는 성과를 위주로 작성하는 게 좋아요!"
          )
        }
      />

      <div
        style={{
          marginBottom: "20px",
        }}
      >
        <FormLabel htmlFor="photo">3. 본인의 사진을 선택해주세요.</FormLabel>
        <FileUpdate
          onChange={handlePhotoChange}
          onFocus={() => handleInputClick("본인이 잘나온 사진을 넣어주세요!")}
        />
      </div>

      <FormField
        id="portfolio-title"
        label="4. 포트폴리오 제목을 입력해주세요."
        chat="true"
        onChange={handlePortfolioTitleChange}
        onFocus={() =>
          handleInputClick("본인의 가치관을 드러내는 한 줄로 적으면 좋아요!")
        }
        size="xl"
      />
    </PortfolioFormWrapper>
  );
};
export default PortfolioForm;
