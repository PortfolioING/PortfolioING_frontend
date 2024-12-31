import styled from "styled-components";
const PriceContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 100vh;
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

  > .price-card-title {
    font-size: 48px;
    font-weight: 600;
  }

  > .price-card-cost {
    display: flex;
    justify-content: center;
    font-size: 32px;
    font-weight: 300;
  }
  > .price-card-button {
    padding: 10px 40px;
    border-radius: 50px;
    background-color: white;
    font-size: 20px;
    font-weight: 300;

    border: 1px solid ${({ color }) => color};
    color: ${({ color }) => color};

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
    height: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    > img {
      display: ${(props) => (props.isAble ? "block" : "none")};
    }
  }
  > .text {
    font-size: 17px;
    text-align: left;
    color: ${(props) => (props.isAble ? "black" : "#C8C8C8")};
  }
`;
export { PriceContainer, StyledPriceCard, DescWrapper, Desc };
