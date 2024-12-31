import React from "react";
import styled from "styled-components";

const PayOption = ({ name, isActive, img, addCardList, deleteCardList }) => {
  const handleClick = () => {
    if (isActive) {
      deleteCardList(name);
    } else {
      addCardList(name);
    }
  };

  return (
    <PayContainer isActive={isActive} onClick={handleClick}>
      <div>
        <div className="round">
          <div className="small-round"></div>
        </div>
        <p>{name}</p>
      </div>
      <img src={img} alt={`${name} logo`} />
    </PayContainer>
  );
};

const PayContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 366px;
  height: 45px;
  padding: 10px;
  border-radius: 20px;
  border: 1px solid ${(props) => (props.isActive ? "#E4FF0D" : "black")};
  background-color: white;
  font-size: 20px;
  margin-top: 20px;
  box-sizing: border-box;
  cursor: pointer;

  > img {
    width: 80px;
  }

  > div {
    display: flex;
    justify-content: flex-start;
    align-items: center;

    > .round {
      border: 0.5px solid ${(props) => (props.isActive ? "#E4FF0D" : "black")};
      width: 30px;
      height: 30px;
      border-radius: 50%;
      margin-right: 10px;
      display: flex;
      align-items: center;
      justify-content: center;

      > .small-round {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background-color: ${(props) => (props.isActive ? "#E4FF0D" : "white")};
      }
    }
  }
`;

export default PayOption;
