import React, { useState } from "react";
import styled from "styled-components";

import { Button } from "../../../Button/Button.styles";
import kakao from "../../../../asset/icons/kakaoIcon.svg";
import naver from "../../../../asset/icons/naverIcon.svg";
import toss from "../../../../asset/icons/tossIcon.svg";

export default function PaymentMethod() {
  // 단일 카드 선택 상태 관리
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (name) => {
    // 이미 선택된 카드를 다시 클릭하면 선택 해제
    if (selectedCard === name) {
      setSelectedCard(null);
    } else {
      setSelectedCard(name);
    }
  };

  return (
    <>
      <Section>
        <div className="btn-wrap">
          <div className="btn"></div>
          <p>빠른 결제</p>
        </div>
        <AddCard>
          <div className="plus">+</div>
          <p>자주 쓰는 카드나 계좌를 등록하고 1초만에 결제하세요</p>
        </AddCard>
      </Section>
      <Section>
        <div className="btn-wrap">
          <div className="btn"></div>
          <p>일반 결제</p>
        </div>
        <Cards>
          {["kakao", "naver", "toss"].map((name) => (
            <Card
              key={name}
              name={name}
              isSelected={selectedCard === name}
              handleCardClick={handleCardClick}
            />
          ))}
        </Cards>
      </Section>
      <Button onClick={() => console.log()} size="s" width="100%" height="55px">
        1000,000원 결제하기
      </Button>
    </>
  );
}

const Section = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 20px;
  > .btn-wrap {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
    > .btn {
      width: 25px;
      height: 25px;
      border-radius: 50%;
      border: 1px solid #d9d9d9;
    }
  }
`;

const AddCard = styled.div`
  width: 100%;
  min-height: 150px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #d9d9d9;
  border: 1px solid #d9d9d9;
  gap: 10px;
  .plus {
    width: 25px;
    height: 25px;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    border-radius: 50%;
    border: 1px solid #d9d9d9;
  }
`;

const Cards = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const CardWrapper = styled.div<{ isSelected: boolean; color: string }>`
  width: 220px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  background-color: ${(props) => props.color};
  cursor: pointer;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.1);

  ${(props) => props.isSelected && "filter: brightness(0.7);"}
  box-sizing: border-box;
`;

const Card = ({ name, isSelected, handleCardClick }) => {
  let color;
  let src;
  if (name === "kakao") {
    color = "#FFEB00";
    src = kakao;
  } else if (name === "naver") {
    color = "#00DE5A";
    src = naver;
  } else if (name === "toss") {
    color = "#3182F6";
    src = toss;
  }

  return (
    <CardWrapper
      color={color}
      isSelected={isSelected}
      onClick={() => handleCardClick(name)}
    >
      <img src={src} alt={`${name} 로고`} style={{ height: "27px" }} />
    </CardWrapper>
  );
};
