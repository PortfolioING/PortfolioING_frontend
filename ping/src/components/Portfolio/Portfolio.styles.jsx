import styled from "styled-components";

const PortfolioWrapper = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 30px;
  box-sizing: border-box;
`;
const ImgWrapper = styled.div`
  height: inherit;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  > div {
    width: 300px;
    height: inherit;
    border-radius: 20px;
    background-color: black;
  }
  > img {
    width: 300px;
    height: inherit;
    border-radius: 20px;
  }
`;

const PortfolioDesc = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 5px;
  height: 140px;
  box-sizing: border-box;
  > .title {
    font-size: 24px;
    font-weight: 500;
  }
  > .category-wrapper {
    display: flex;
    justify-content: flex-start;
    gap: 5px;
  }
  > .btn-wrapper {
    float: left;
  }
  > .last {
    font-size: 11px;
    color: #cbcbcb;
    float: left;
  }
`;

const Category = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  justify-content: center;
  text-align: center;
  box-sizing: border-box;
  background-color: #f6f5f5;
  color: white;
  border-radius: 5px;
  padding: 3px 5px;
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
      case "UX/UI":
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
        return "#c3db0a"; // 기본 색상 (필요에 따라 변경 가능)
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
        case "UX/UI":
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
          return "#c3db0a"; // 기본 색상 (필요에 따라 변경 가능)
      }
    }};
`;
export { PortfolioDesc, PortfolioWrapper, ImgWrapper, Category };
