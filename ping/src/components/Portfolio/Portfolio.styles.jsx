import styled from "styled-components";

const PortfolioWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
`;
const ImgWrapper = styled.div`
  > img {
    width: 245px;
    height: 140px;
    border-radius: 20px;
  }
  margin-right: 20px;
`;

const PortfolioDesc = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  > .title {
    font-size: 24px;
    font-weight: 300;
  }
  > .category-wrapper {
    width: 50px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3px;
  }
  > .btn-wrapper {
    > button {
      margin-right: 5px;
    }
  }
  > .last {
    font-size: 11px;
    font-weight: 500;
    color: #cbcbcb;
  }
`;
const Category = styled.div`
  width: 55px;
  height: 17px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3px;
  box-sizing: border-box;
  background-color: #f6f5f5;
  color: white;
  border-radius: 5px;

  font-size: 10px;
  font-weight: 400;

  color: ${({ category }) => {
    switch (category) {
      case "프론트엔드":
        return "#DF0DF1";
      case "백엔드":
        return "#0C4CBB";
      case "디자인":
        return "#00DA95";
      case "UI/UX":
        return "#FC7831";
      case "보안":
        return "#43874B";
      case "안드로이드":
        return "#DBDE44";
      case "PM":
        return "#23BCCA";
      case "기획":
        return "#FF0D6E";
      case "IOS":
        return "#82DE44";
      case "AI":
        return "#D71F1F";
      default:
        return "#000"; // 기본 색상 (필요에 따라 변경 가능)
    }
  }};
  border: 1px solid
    ${({ category }) => {
      switch (category) {
        case "프론트엔드":
          return "#DF0DF1";
        case "백엔드":
          return "#0C4CBB";
        case "디자인":
          return "#00DA95";
        case "UI/UX":
          return "#FC7831";
        case "보안":
          return "#43874B";
        case "안드로이드":
          return "#DBDE44";
        case "PM":
          return "#23BCCA";
        case "기획":
          return "#FF0D6E";
        case "IOS":
          return "#82DE44";
        case "AI":
          return "#D71F1F";
        default:
          return "#000"; // 기본 색상 (필요에 따라 변경 가능)
      }
    }};
`;
export { PortfolioDesc, PortfolioWrapper, ImgWrapper, Category };
