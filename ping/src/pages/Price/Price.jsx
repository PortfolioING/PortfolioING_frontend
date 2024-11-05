import MenuBar from "../../components/MenuBar/MenuBar";
import { PriceContainer, StyledPriceCard } from "./Price.styles";
export default function PricePage() {
  return (
    <>
      <MenuBar />
      <PriceContainer>
        <PriceCard title="FREE" desc="기본 기능들" price="0" color="#000000" />
        <PriceCard
          title="STARTER"
          desc="이것저것 있음"
          price="7,900"
          color="#3621B7"
        />
        <PriceCard
          title="PRO"
          desc="여러가지 개마는 기능"
          price="13,900"
          color="#CD12DD"
        />
      </PriceContainer>
    </>
  );
}
function PriceCard({ title, desc, price, color }) {
  return (
    <StyledPriceCard color={color}>
      <div className="price-card-title">{title}</div>
      <p className="price-card-description">{desc}</p>
      <div className="price-card-cost">
        <p className="price-card-value">{price}원</p>
        <p className="price-card-duration">/ 월</p>
      </div>
      <button className={`price-card-button`}>선택</button>
    </StyledPriceCard>
  );
}
