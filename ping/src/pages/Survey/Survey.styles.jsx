import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 35px;
  margin-bottom: 30px;
`;

const PortfolioTitle = styled.div`
  font-size: 30px;
  font-weight: 700;
  text-align: left;
  width: var(--container-width);
  margin: 30px 0;
`;

const PortfolioForm = styled.form`
  display: flex;
  flex-direction: column;
  width: var(--container-width);
`;

const HiddenFileInput = styled.input.attrs({ type: "file" })`
  display: none;
`;

const FileLabel = styled.label`
  float: left;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #c1c1c1;
  border-radius: 30px;
  width: 200px;
  height: 200px;
  > img {
    opacity: 0.3;
    margin: auto;
  }
`;

export { Wrapper, PortfolioTitle, PortfolioForm, HiddenFileInput, FileLabel };
