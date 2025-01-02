import styled from "styled-components";

export const PortfolioWrapper = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 30px;
  margin-bottom: 20px;
  box-sizing: border-box;
`;
export const Img = styled.div`
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

export const PortfolioDesc = styled.div`
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
  > .updatedAt {
    font-size: 11px;
    color: #cbcbcb;
    float: left;
  }
`;
