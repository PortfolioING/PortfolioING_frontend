import { Wrapper, Title } from "../../MainContent.styles";
import { PriceWrapper, PriceTitle, Section } from "./PaymentAdmin.styles";
import PriceDiv from "./PriceDiv";
import PayDiv from "./PayDiv";
import PayList from "./PayList";
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
      <Section>
        <Title>
          <div className="title">결제수단</div>
        </Title>
        <PayDiv />
      </Section>
      <Section>
        <Title>
          <div className="title">결제내역</div>
        </Title>
        <PayList />
      </Section>
    </Wrapper>
  );
};

export default PaymentAdmin;
