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
const PriceDivWrapper = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 180px;
  height: 193px;
  border-radius: 20px;
  border: ${(props) => (props.using ? `3px solid #E4FF0DCC` : "")};
  box-sizing: border-box;
  > .title {
    font-size: 36px;
    font-weight: 500;
  }
  > .price-div {
    font-size: 15px;
    font-weight: 200;
    display: flex;
    align-items: center;
    > .price {
      font-size: 20px;
      font-weight: 300;
    }
  }
`;
const Section = styled.div`
  display: flex;
  flex-direction: column;

  > * {
    margin-bottom: 20px;
  }
`;
const CardWrapper = styled.div`
  width: 620px;
  display: flex;
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
  ::-webkit-scrollbar {
    height: 0px;
    width: 0px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #e4ff0d; /* 스크롤바 색상 */
  }

  > * {
    margin-right: 20px;
    flex-shrink: 0; /* 카드가 줄어들지 않도록 설정 */
  }
`;
export { PriceWrapper, PriceTitle, PriceDivWrapper, Section, CardWrapper };
