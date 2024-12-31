import { useState } from "react";
export function usePaymentList() {
  const [cardList, setCardList] = useState([]);
  //결제수단 추가
  const addCardList = (method) => {
    setCardList((prevList) => {
      if (!prevList.includes(method)) {
        return [...prevList, method];
      }
      return prevList; // 중복 방지
    });
  };

  // 결제수단 삭제
  const deleteCardList = (method) => {
    setCardList((prevMethods) => prevMethods.filter((m) => m !== method));
  };

  return {
    cardList,
    addCardList,
    deleteCardList,
  };
}
