import React from "react";
import styled from "styled-components";
const PayListWrapper = styled.div`
  width: 576px;
  height: 188px;
`;
const ListTitle = styled.div`
  width: 522px;
  height: 30px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const ListElement = styled.div`
  width: 90px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  border-radius: 20px;
  border: 0.5px solid black;
  box-sizing: border-box;
`;
const PayListContent = styled.div`
  width: 576px;
  height: 146px;
  border-top: 1px dotted #dedede;
  border-bottom: 1px dotted #dedede;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  font-size: 15px;
  color: #dedede;
`;
const PayList = () => {
  return (
    <PayListWrapper>
      <ListTitle>
        <ListElement>결재 내용</ListElement>
        <ListElement>결재 일시</ListElement>
        <ListElement>결재 수단</ListElement>
        <ListElement>결재 금액</ListElement>
      </ListTitle>
      <PayListContent>결제 내역이 없습니다.</PayListContent>
    </PayListWrapper>
  );
};

export default PayList;
