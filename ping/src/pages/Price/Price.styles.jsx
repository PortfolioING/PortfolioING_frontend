import styled from "styled-components";
const PriceContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: black;
  height: calc(100vh - 108px);
`;

const StyledPriceCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 20px;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  width: 300px;
  height: 426px;
  border-radius: 20px;
  text-align: center;
  > .price-card-title {
    font-size: 48px;
    font-weight: 600;
  }
  > .price-card-description {
    font-size: 20px;
    font-weight: 200;
  }
  > .price-card-cost {
    height: 57px;
    display: flex;
    justify-content: center;
    > .price-card-value {
      font-size: 32px;
      font-weight: 300;
    }
    > .price-card-duration {
      font-size: 32px;
      font-weight: 200;
    }
  }
  > .price-card-button {
    width: 140px;
    height: 45px;
    padding: 8px 49px;
    border-radius: 50px;
    background-color: white;
    font-size: 20px;
    font-weight: 300;
    border: 1px solid ${({ color }) => color};
    color: ${({ color }) => color};
    cursor: pointer;

    &:hover {
      background-color: ${({ color }) => color};
      color: white;
      border: 1px solid white;
    }
  }
`;
const DescWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const Desc = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 10px;
  gap: 10px;
  > .img {
    width: 15px;
    height: 15px; /* 부모 컨테이너의 크기를 고정 */
    display: flex; /* 자식 요소를 가운데 정렬 */
    justify-content: center;
    align-items: center;
    box-sizing: border-box;

    > img {
      display: ${(props) => (props.isAble ? "block" : "none")};
    }
  }
  > .text {
    font-size: 17px;
    float: left;
    text-align: left;
    color: ${(props) => (props.isAble ? "black" : "#C8C8C8")};
  }
`;
export { PriceContainer, StyledPriceCard, DescWrapper, Desc };
