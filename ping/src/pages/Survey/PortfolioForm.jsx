import FormLabel from "../../components/Form/FormLabel";
import FormField from "../../components/Form/FormField";
import FileUpdate from "../../components/FileUpdate/FileUpdate";
import { PortfolioFormWrapper } from "./Survey.styles";
const PortfolioForm = () => {
  return (
    <PortfolioFormWrapper>
      <FormField id="name" label="1. 이름을 입력해주세요." chat="true" />
      <FormField
        id="introduction"
        label="2. 자기소개를 해주세요."
        chat="true"
        height="200px"
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
      />
    </PortfolioFormWrapper>
  );
};
export default PortfolioForm;
