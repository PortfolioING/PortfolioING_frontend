import React, { useState } from "react";
import { CardWrapper } from "./Card.styles";
import Kakao from "../../asset/kakao.png";
import Naver from "../../asset/naver.png";
import Toss from "../../asset/toss.png";
const Card = ({ name }) => {
  const [select, setSelect] = useState(false);
  const handleClick = () => {
    setSelect((prev) => !prev);
  };
  let color;
  let src;
  let text;
  if (name == "카카오페이") {
    color = "#FAFF01";
    src = Kakao;
    text = "Kakao pay";
  } else if (name == "토스") {
    color = "#004ADB";
    src = Toss;
    text = "Toss";
  } else if (name == "네이버") {
    src = Naver;
    text = "Naver pay";
    color = "#2BEF3F";
  }
  return (
    <CardWrapper color={color} onClick={handleClick}>
      {select ? <div className="click">✓</div> : ""}
      <img src={src} alt="로고" />
      <p>{text}</p>
    </CardWrapper>
  );
};

export default Card;
