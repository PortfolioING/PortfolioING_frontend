import styled from "styled-components";
const PriceWrapper = styled.div`
  width: 620px;
  height: 302px;
  border-radius: 20px;
  background-color: #f1f1f1b5;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 30px 20px;
  box-sizing: border-box;
  > .priceDiv-wrapper {
    display: flex;
    justify-content: space-around;
  }
`;
const PriceTitle = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 15px;

  > .title {
    font-size: 20px;
    font-weight: 500;
  }
`;
const Section = styled.div`
  display: flex;
  flex-direction: column;
  > * {
    margin-bottom: 20px;
  }
`;

export { PriceWrapper, PriceTitle, Section };
