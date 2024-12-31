import React from "react";
import PaymentOptionList from "./PaymentOptionList.jsx";
import "../../../../asset/styles/popup.css";
import styled from "styled-components";
const PopUp = ({ handlePopupClose, cardList, addCardList, deleteCardList }) => {
  const handleWrapperClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div className="popup" onClick={handlePopupClose}>
      <PopupWrapper onClick={handleWrapperClick}>
        <div className="title">
          <p className="bold">결제 수단 등록</p>
          <p>사용하실 결제 수단을 선택해주세요.</p>
        </div>
        <PaymentOptionList
          cardList={cardList}
          addCardList={addCardList}
          deleteCardList={deleteCardList}
        />
      </PopupWrapper>
    </div>
  );
};
const PopupWrapper = styled.div`
  z-index: 10;
  background-color: white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  width: 400px;

  border-radius: 16px;
  padding: 24px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .title {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-size: 16px;
    color: #333;
    margin-bottom: 16px;
    .bold {
      font-size: 24px;
      font-weight: 600;
      margin-bottom: 8px;
      color: #000;
    }
  }
`;

export default PopUp;
