import styled from "styled-components";
import { Wrapper, Title } from "../User.styles";

import SubscriptionInfo from "../../../components/User/Payment/SubscriptionInfo";
import PaymentMethod from "../../../components/User/Payment/PaymentMethod";
import PaymentHistory from "../../../components/User/Payment/PaymentHistory";
const PaymentAdmin = () => {
  return (
    <Wrapper>
      <Section>
        <Title>
          <div className="title">구독정보</div>
        </Title>
        <SubscriptionInfo />
      </Section>
      <Section>
        <Title>
          <div className="title">결제수단</div>
        </Title>
        <PaymentMethod />
      </Section>
      <Section>
        <Title>
          <div className="title">결제내역</div>
        </Title>
        <PaymentHistory />
      </Section>
    </Wrapper>
  );
};

const Section = styled.div`
  display: flex;
  flex-direction: column;
  > * {
    margin-bottom: 20px;
  }
`;
export default PaymentAdmin;
