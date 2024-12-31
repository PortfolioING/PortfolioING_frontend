import React from "react";
import PayOption from "./PayOption";
import NaverPay from "../../../../asset/naverpay.svg";
import KakaoPay from "../../../../asset/kakaopay.png";
import TossPay from "../../../../asset/tosspay.png";

const paymentMethods = [
  { name: "네이버", img: NaverPay },
  { name: "카카오페이", img: KakaoPay },
  { name: "토스", img: TossPay },
];

const PaymentOptionList = ({ cardList, addCardList, deleteCardList }) => {
  return (
    <>
      {paymentMethods.map((method) => (
        <PayOption
          key={method.name}
          name={method.name}
          img={method.img}
          isActive={cardList.includes(method.name)}
          addCardList={addCardList}
          deleteCardList={deleteCardList}
        />
      ))}
    </>
  );
};

export default PaymentOptionList;
