import React from "react";
import styled from "styled-components";

const ListTitle = styled.div`
  height: 30px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const ListElement = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  border-radius: 20px;
  border: 0.5px solid black;
  padding: 8px 16px;
`;
const PayListContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
  padding: 15px;
  font-size: 15px;
  color: #dedede;
  border-top: 1px dotted #dedede;
  border-bottom: 1px dotted #dedede;
`;
const PaymentHistory = () => {
  return (
    <div>
      <ListTitle>
        <ListElement>결재 내용</ListElement>
        <ListElement>결재 일시</ListElement>
        <ListElement>결재 수단</ListElement>
        <ListElement>결재 금액</ListElement>
      </ListTitle>
      <PayListContent>결제 내역이 없습니다.</PayListContent>
    </div>
  );
};

export default PaymentHistory;
