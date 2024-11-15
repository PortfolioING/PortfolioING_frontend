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
  text-align: center;
`;

const ImgWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  > img {
    width: 150px;
    height: 150px;
    border-radius: 20px;
    object-fit: cover;
    z-index: 1;
  }

  > button {
    position: absolute;
    bottom: -10px;
    right: -10px;
    width: 30px;
    height: 30px;
    border: none;
    border-radius: 50%;
    background-color: #e4ff0d;
    z-index: 5;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    > img {
      width: 15px;
    }
  }
`;

const PreviewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  position: relative; /* 부모 요소에 상대 위치 설정 */
`;

export { Label, ImgWrapper, PreviewWrapper };
