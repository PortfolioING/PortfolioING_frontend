import styled from "styled-components";

const Wrapper = styled.div`
  width: 800px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 0 auto;
  margin-top: 120px;
  > .title {
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
  border: 1px solid #e9e9e9;
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
    width: 350px;
    line-height: 1.5;
    word-wrap: break-word;
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
export { Wrapper, TemplateWrapper, TemplateDescWrapper };
