import React, { useState, useEffect } from "react";
import Popup from "../../../../components/Popup/Popup";
import Card from "../../../../components/Card/Card";
import Button from "../../../../components/Button/Button";
import styled from "styled-components";
const SELECTED_CARD_KEY = "selectedPayMethod";
const CardWrapper = styled.div`
  width: 620px;
  display: flex;
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
  > * {
    margin-right: 20px;
    flex-shrink: 0;
  }

  scrollbar-width: none;
`;
const PayDiv = () => {
  //팝업
  const [popup, setPopup] = useState(false);
  //결제수단 등록
  const [selectedPayMethod, setSelectedPayMethod] = useState([]);

  const handlePopupClose = () => {
    setPopup(false);
  };
  //결제수단 추가
  const handlePayMethodSelect = (method) => {
    setSelectedPayMethod(...method);
    setPopup(false);
  };
  //결제수단 삭제
  const togglePayMethod = (method) => {
    setSelectedPayMethod((prevMethods) =>
      prevMethods.includes(method)
        ? prevMethods.filter((m) => m !== method)
        : [...prevMethods, method]
    );
  };

  //하나의 카드 선택
  const [selectedCard, setSelectedCard] = useState(null);
  useEffect(() => {
    const storedMethod = localStorage.getItem(SELECTED_CARD_KEY);
    if (storedMethod) {
      setSelectedCard(storedMethod);
    }
  }, [selectedCard]);

  const handleCardSelect = (name) => {
    // 이미 선택된 카드가 있으면 더 이상 선택할 수 없도록 제한
    if (selectedCard && selectedCard !== name) return;

    // 현재 카드를 선택 상태로 설정
    const newSelectedCard = selectedCard === name ? null : name; // 선택 해제 가능
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
          selectedMethods={selectedPayMethod}
          handlePopupClose={handlePopupClose}
          onPayMethodSelect={handlePayMethodSelect}
          togglePayMethod={togglePayMethod}
        />
      ) : null}
      <CardWrapper>
        {selectedPayMethod.map((pay) => (
          <Card
            name={pay}
            selectedCard={selectedCard}
            onSelect={handleCardSelect}
          />
        ))}
      </CardWrapper>
      <Button
        onClick={() => setPopup(true)}
        btnfontSize="15px"
        btnwidth="620px"
        btnheight="45px"
        childern="+ 결제 수단 등록"
      />
    </>
  );
};

export default PayDiv;
