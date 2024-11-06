import { Wrapper, Title } from "./MainContent.styles";
import Button from "../../components/Button/Button";
import {
  PriceWrapper,
  PriceTitle,
  Section,
  PriceDivWrapper,
  CardWrapper,
} from "./PaymentAdmin.styles";
import Popup from "../../components/Popup/Popup";
import Card from "../../components/Card/Card";
import { useState } from "react";

const PayDiv = () => {
  const [popup, setPopup] = useState(false);
  const [selectedPayMethod, setSelectedPayMethod] = useState([]);

  const handlePopupClose = () => {
    setPopup(false);
  };

  const handlePayMethodSelect = (method) => {
    setSelectedPayMethod(...method);
    setPopup(false);
  };
  const togglePayMethod = (method) => {
    setSelectedPayMethod((prevMethods) =>
      prevMethods.includes(method)
        ? prevMethods.filter((m) => m !== method)
        : [...prevMethods, method]
    );
  };

  return (
    <>
      {popup ? (
        <Popup
          handlePopupClose={handlePopupClose}
          onPayMethodSelect={handlePayMethodSelect}
          togglePayMethod={togglePayMethod}
        />
      ) : null}
      <CardWrapper>
        {selectedPayMethod.map((pay) => (
          <Card name={pay} />
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
      <Section>
        <Title>
          <div className="title">결제수단</div>
        </Title>
        <PayDiv />
      </Section>
    </Wrapper>
  );
};

export default PaymentAdmin;
