import styled from "styled-components";
const FullLogo = styled.div`
  width: 100%;
  height: calc(100vh - 108px);
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .slogan {
    font-family: Pretendard;
    font-size: 36px;
    font-weight: 700;
    line-height: 42.96px;
    text-align: left;
    color: #e4ff0d;
  }

  > .fullName {
    font-family: Sokcho Bada Dotum;
    font-size: 135px;
    font-weight: 900;
    line-height: 148px;
    text-align: left;
    color: #e4ff0d;
    > p {
      display: inline;
    }
  }
`;
export { FullLogo };
