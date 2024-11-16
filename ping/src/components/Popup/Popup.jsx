import { PayContainer, PopupWrapper } from "./Popup.styles";
import NaverPay from "../../asset/naverpay.svg";
import KakaoPay from "../../asset/kakaopay.png";
import TossPay from "../../asset/tosspay.png";
const PayDiv = ({ name, selectedMethods = [], togglePayMethod, img }) => {
  const isActive = selectedMethods.includes(name);
  const handleClick = () => {
    togglePayMethod(name);
  };

  return (
    <PayContainer isActive={isActive}>
      <div>
        <div className="round" onClick={handleClick}>
          <div className="small-round"></div>
        </div>
        <p>{name}</p>
      </div>
      <img src={img} style={{ float: "right" }} />
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
          img={NaverPay}
        />
        <PayDiv
          name="카카오페이"
          selectedMethods={selectedMethods}
          togglePayMethod={togglePayMethod}
          img={KakaoPay}
        />
        <PayDiv
          name="토스"
          selectedMethods={selectedMethods}
          togglePayMethod={togglePayMethod}
          img={TossPay}
        />
      </PopupWrapper>
    </div>
  );
};

export default PopUp;
