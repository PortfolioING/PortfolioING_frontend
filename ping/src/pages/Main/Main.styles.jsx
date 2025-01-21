import styled from "styled-components";
const FullLogo = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: black;
  .slogan {
    font-size: 36px;
    font-weight: 700;
  }

  > .fullName {
    font-size: 135px;
    font-weight: 900;
    text-align: left;
    color: #e4ff0d;
    > p {
      display: inline;
    }
  }
`;
export { FullLogo };
