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
  width: 50px;
  height: 17px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3px;
  box-sizing: border-box;
  background-color: #f4f4f4;
  border-radius: 5px;

  font-size: 10px;
  font-weight: 400;

  color: ${({ category }) => {
    switch (category) {
      case "프론트":
        return "#cd12dd";
      case "백":
        return "#3621B7";
      case "디자인":
        return "#21B76F";
      case "UI/UX":
        return "#FF9D00";
      case "게임 개발":
        return "#00DDFF";
      default:
        return "#000"; // 기본 색상 (필요에 따라 변경 가능)
    }
  }};
  border: 1px solid
    ${({ category }) => {
      switch (category) {
        case "프론트":
          return "#cd12dd";
        case "백":
          return "#3621B7";
        case "디자인":
          return "#21B76F";
        case "UI/UX":
          return "#FF9D00";
        case "게임 개발":
          return "#00DDFF";
        default:
          return "#000"; // 기본 색상 (필요에 따라 변경 가능)
      }
    }};
`;
export { PortfolioDesc, PortfolioWrapper, ImgWrapper, Category };
