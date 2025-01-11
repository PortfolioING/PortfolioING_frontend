import React from "react";
import styled from "styled-components";

const ListTitle = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const ListElement = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 17px;
`;
const PayListContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
  font-size: 15px;
  color: #a0a0a0;
  min-height: 70px;
  width: 100%;
  background-color: #ececec;
  border-top: 1px solid black;
`;
const PaymentHistory = () => {
  return (
    <>
      <ListTitle>
        <ListElement>결제 내용</ListElement>
        <ListElement>결제 일시</ListElement>
        <ListElement>결제 수단</ListElement>
        <ListElement>결제 금액</ListElement>
      </ListTitle>
      <PayListContent>결제 내역이 없습니다.</PayListContent>
    </>
  );
};

export default PaymentHistory;
