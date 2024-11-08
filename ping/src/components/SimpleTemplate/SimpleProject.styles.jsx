import styled from "styled-components";

const LeftWrapper = styled.div`
  height: calc(100vh - 50px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0px 40px;
  box-sizing: border-box;
  > .img {
    width: 290px;
    height: 290px;
    border: 1px solid #00ffa3;
    border-radius: 50%;
    margin-bottom: 30px;
  }
`;
const DescWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 30px;
  > .project-desc {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: white;
    height: 40px;
    font-size: 18px;
    font-weight: 400;
    > .desc-title {
      font-size: 23px;
      margin-right: 20px;
    }
  }
`;
const CategoryWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  > * {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 101px;
    height: 37px;
    border-radius: 20px;
    border: 1px solid #00ffa3;
    color: #00ffa3;
    font-size: 20px;
    margin: 0 10px;
  }
`;
const RightWrapper = styled.div`
  height: calc(100vh - 50px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
  > .title {
    width: 390px;
    height: 81px;
    font-size: 60px;
    font-weight: 400;
  }
  > .project-intro {
    width: 670px;
    height: 23px;

    color: #00ffa3;
    font-size: 20px;
    font-weight: 400;
    margin-bottom: 20px;
  }
  > .project-desc {
    border: 1px solid #00ffa3;
    width: 500px;
    height: 300px;
    padding: 20px;
    overflow-x: hidden;
    overflow-y: auto;
    font-size: 18px;
    line-height: 1.6;
    box-sizing: border-box;
  }
  .project-desc::-webkit-scrollbar {
    width: 10px;
  }

  /* 스크롤 바 트랙 (배경) */
  .project-desc::-webkit-scrollbar-track {
    background: #f1f1f1; /* 연한 회색 배경 */
    border-radius: 6px; /* 둥근 모서리 */
  }

  /* 스크롤 바 핸들 (움직이는 부분) */
  .project-desc::-webkit-scrollbar-thumb {
    background: #00ffa3; /* 초록색 핸들 */
    border-radius: 6px; /* 둥근 모서리 */
    border: 1px solid #f1f1f1; /* 핸들의 테두리 */
  }

  /* 스크롤 바 핸들에 hover 효과 */
  .project-desc::-webkit-scrollbar-thumb:hover {
    background: #00cc80; /* 조금 더 어두운 초록색 */
  }
`;
export { RightWrapper, DescWrapper, CategoryWrapper, LeftWrapper };
