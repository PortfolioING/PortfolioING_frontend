import styled from "styled-components";
const Header = styled.div`
  position: fixed;
  top: 0;
  height: 100px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 24px;

  color: white;
  background: black;

  box-sizing: border-box;
  > .user-img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
  }
  > * {
    margin-right: 20px;
  }
`;
const Wrapper = styled.div`
  width: 800px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 0 auto;
  margin-top: 100px;
  > .title {
    color: #e4ff0d;
    font-size: 30px;
    font-weight: 800;
    padding: 20px;
  }
`;
const TemplateWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const TemplateDescWrapper = styled.div`
  background-color: white;
  height: 200px;
  margin: 10px 0;
  display: flex;
  padding: 30px;
  box-sizing: border-box;
  color: black;
  border-radius: 20px;
  > .template-img {
    width: 300px;
    border-radius: 20px;
    margin-right: 20px;
    box-sizing: border-box;
  }
  > .template-desc {
    font-size: 14px;
    font-weight: 200;
    width: 350px; /* 텍스트 가로 길이 설정 */
    line-height: 1.5; /* 줄 간격 설정 */
    word-wrap: break-word; /* 길이가 길면 단어를 줄바꿈 */
    .name {
      font-size: 30px;
      font-weight: 500;
      margin-bottom: 20px;
    }
    .description {
      margin-top: 10px;
      white-space: pre-line;
    }
  }
`;
export { Header, Wrapper, TemplateWrapper, TemplateDescWrapper };
