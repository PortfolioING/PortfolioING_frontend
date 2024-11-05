import { Wrapper, Title } from "./MainContent.styles";
import Button from "../../components/Button/Button";
import {
  PriceWrapper,
  PriceTitle,
  Section,
  PriceDivWrapper,
} from "./PaymentAdmin.styles";
const PriceDiv = ({ title, price, using }) => {
  return (
    <PriceDivWrapper using={using}>
      <div className="title">{title}</div>
      <div className="price-div">
        <p className="price">{price}원 </p>
        <p>/ 월</p>
      </div>
      <Button
        btnwidth="94px"
        btnheight="30px"
        childern={using ? "이용중" : "구독하기"}
      />
    </PriceDivWrapper>
  );
};
const PaymentAdmin = () => {
  return (
    <Wrapper>
      <Section>
        <Title>
          <div className="title">구독정보</div>
        </Title>
        <PriceWrapper>
          <PriceTitle>
            <p className="title">Free(무료 요금제)</p>
            <p>를 이용하고 있습니다.</p>
          </PriceTitle>
          <div className="priceDiv-wrapper">
            <PriceDiv title="Free" price="0" using={true} />
            <PriceDiv title="Starter" price="7,900" />
            <PriceDiv title="Pro" price="13,900" />
          </div>
        </PriceWrapper>
      </Section>
    </Wrapper>
  );
};

export default PaymentAdmin;
