import React, { useState, useEffect } from "react";
import Popup from "./Popup/Popup.jsx";
import Card from "./Card/Card.jsx";
import Button from "../../Button/Button";
import styled from "styled-components";
import { usePayment } from "../../../hooks/usePayment/usePayment.js";
import { usePaymentList } from "../../../hooks/usePayment/usePaymentList.js";
import { usePaymentPopup } from "../../../hooks/usePayment/usePaymentPopup.js";

const SELECTED_CARD_KEY = "selectedCard";

const PaymentMethod = () => {
  //하나의 카드 선택
  const { selectedCard, setSelectedCard } = usePayment();
  //팝업
  const { popup, handlePopupOpen, handlePopupClose } = usePaymentPopup();
  //카드 리스트
  const { cardList, addCardList, deleteCardList } = usePaymentList();

  useEffect(() => {
    const storedMethod = localStorage.getItem(SELECTED_CARD_KEY);
    if (storedMethod) {
      setSelectedCard(storedMethod);
    } else {
      setSelectedCard(null);
    }
  }, [selectedCard]);

  const handleCardSelect = (card: null) => {
    //이미 선택된 카드가 있으면 더 이상 선택할 수 없도록 제한
    if (selectedCard && selectedCard !== card) return;
    // 현재 카드를 선택 상태로 설정
    const newSelectedCard = selectedCard == card ? null : card;
    setSelectedCard(newSelectedCard);
    // 선택된 카드 정보를 `localStorage`에 저장
    if (newSelectedCard) {
      localStorage.setItem(SELECTED_CARD_KEY, newSelectedCard);
    } else {
      localStorage.removeItem(SELECTED_CARD_KEY); // 선택 해제 시 `localStorage`에서 삭제
    }
  };

  return (
    <>
      {popup ? (
        <Popup
          handlePopupClose={handlePopupClose}
          cardList={cardList}
          addCardList={addCardList}
          deleteCardList={deleteCardList}
        />
      ) : null}
      <Cards>
        {Array.isArray(cardList) &&
          cardList.map((card) => (
            <Card
              name={card}
              onSelect={selectedCard == card}
              handleCardSelected={handleCardSelect}
            />
          ))}
      </Cards>

      <AddCard onClick={() => handlePopupOpen()} children="+ 결제 수단 등록" />
    </>
  );
};
const Cards = styled.div`
  width: 100%;
  display: flex;
  > * {
    margin-right: 20px;
    flex-shrink: 0;
  }
`;
const AddCard = styled.button`
  border: 0.5px solid black;
  height: 45px;
  border-radius: 20px;
  background-color: white;
`;
export default PaymentMethod;
