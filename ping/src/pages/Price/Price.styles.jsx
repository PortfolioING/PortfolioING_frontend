import styled from "styled-components";
import { HEADER } from "../../utils/constant/Bar";
export const PriceContainer = styled.div`
  background-color: black;
  display: flex;
  height: calc(100vh - ${HEADER}px);
  width: 100%;
  justify-content: center;
  gap: 80px;
  align-items: center;
`;
export const StyledPriceCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 30px;
  justify-content: space-around;
  align-items: center;
  background-color: ${({ selected }) => (selected ? "#FDFCE5" : "white")};
  width: 330px;
  height: 500px;
  border-radius: 20px;
  border: 3px solid ${({ selected }) => (selected ? "#EAFF0D" : "transparent")};

  > .price-card-title {
    font-size: 48px;
    font-weight: 600;
    color: ${({ selected }) => (selected ? "#A2B324" : "black")};
  }

  > .price-card-cost {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    font-size: 20px;

    > .bold {
      font-size: 32px;
      font-weight: 600;
      color: ${({ selected }) => (selected ? "#A2B324" : "black")};
    }
  }

  > .price-card-button {
    padding: 12px 40px;
    border-radius: 50px;
    background-color: ${({ selected }) => (selected ? "#A2B324" : "white")};
    font-size: 20px;
    font-weight: 600;
    border: 1px solid #a2b324;
    color: ${({ selected }) => (selected ? "white" : "#A2B324")};
    cursor: pointer;

    &:hover {
      background-color: #a2b324;
      color: white;
    }
  }
`;

export const DescWrapper = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;
export const Desc = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 10px;
  line-height: 1.1;
  gap: 10px;

  > .img {
    width: 15px;
    height: 15px;
    min-width: 15px; /* 이미지 공간을 유지하기 위해 추가 */
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;

    > img {
      visibility: ${(props) =>
        props.isAble ? "visible" : "hidden"}; /* display 대신 visibility 사용 */
    }
  }

  > .text {
    font-size: 17px;
    text-align: left;
    color: ${(props) => (props.isAble ? "black" : "#C8C8C8")};
  }
`;
