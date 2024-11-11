import styled from "styled-components";
const Label = styled.label`
  display: block;
  line-height: 150px;
  width: 150px;
  height: 150px;
  border: 1px solid #c1c1c1;
  color: #c1c1c1;
  border-radius: 20px;
  box-sizing: border-box;
`;
const ImgWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  > button {
    position: absolute;
    bottom: -15px;
    right: -15px;
    width: 30px;
    height: 30px;
    border: none;
    border-radius: 50%;
    color: white;
    background-color: #f1f1f1b5;
  }
  > img {
    width: 150px;
    height: 150px;
  }
`;
const PreviewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export { Label, ImgWrapper, PreviewWrapper };
