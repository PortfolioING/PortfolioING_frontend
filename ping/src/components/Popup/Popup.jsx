import { useState } from "react";
import { PayContainer, PopupWrapper } from "./Popup.styles";

const PayDiv = ({ name, selectedMethods = [], togglePayMethod }) => {
  const isActive = selectedMethods.includes(name);
  const handleClick = () => {
    togglePayMethod(name);
  };

  return (
    <PayContainer isActive={isActive}>
      <div className="round" onClick={handleClick}>
        <div className="small-round"></div>
      </div>
      <p>{name}</p>
    </PayContainer>
  );
};

const PopUp = ({ handlePopupClose, selectedMethods = [], togglePayMethod }) => {
  const handleWrapperClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: "9",
      }}
      onClick={handlePopupClose}
    >
      <PopupWrapper onClick={handleWrapperClick}>
        <div className="title">
          <p className="bold">결제 수단 등록</p>
          <p>사용하실 결제 수단을 선택해주세요.</p>
        </div>
        <PayDiv
          name="네이버"
          selectedMethods={selectedMethods}
          togglePayMethod={togglePayMethod}
        />
        <PayDiv
          name="카카오페이"
          selectedMethods={selectedMethods}
          togglePayMethod={togglePayMethod}
        />
        <PayDiv
          name="토스"
          selectedMethods={selectedMethods}
          togglePayMethod={togglePayMethod}
        />
      </PopupWrapper>
    </div>
  );
};

export default PopUp;
