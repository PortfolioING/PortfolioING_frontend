import React from "react";
import { Title } from "./Payment.styles";

import SubscriptionInfo from "./components/SubscriptionInfo";
import PaymentMethod from "./components/PaymentMethod";
import PaymentHistory from "./components/PaymentHistory";
export default function Payment() {
  return (
    <>
      <>
        <Title>구독정보</Title>
        <SubscriptionInfo />
      </>
      <>
        <Title style={{ marginTop: "50px" }}>결제내역</Title>
        <PaymentHistory />
      </>
      <>
        <Title style={{ marginTop: "50px" }}>결제수단</Title>
        <PaymentMethod />
      </>
    </>
  );
}
