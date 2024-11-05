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
export { PriceContainer, StyledPriceCard };
