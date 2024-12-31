import { CardWrapper } from "./Card.styles";
import Kakao from "../../../../asset/kakao.png";
import Naver from "../../../../asset/naver.png";
import Toss from "../../../../asset/toss.png";

const Card = ({ name, onSelect, handleCardSelected }) => {
  const handleClick = () => {
    handleCardSelected(name); // 선택된 카드 업데이트
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
      {onSelect && <div className="click">✓</div>}
      <img src={src} alt="로고" />
      <p>{text}</p>
    </CardWrapper>
  );
};

export default Card;
