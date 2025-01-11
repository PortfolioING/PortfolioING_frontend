import React, { useState } from "react";
import {
  PopupWrapper,
  PopupContent,
  MenuWrapper,
  User,
  Menu,
  Content,
  Header,
} from "./Setting.styles";
import user from "../../asset/icons/user.svg";
import money from "../../asset/icons/money.svg";
import UserInfo from "./UserInfo/UserInfo";
import Payment from "./Payment/Payment";

export default function Setting() {
  const [selectedMenu, setSelectedMenu] = useState("UserInfo");

  const renderContent = () => {
    switch (selectedMenu) {
      case "UserInfo":
        return <UserInfo />;
      case "Payment":
        return <Payment />;
      default:
        return null;
    }
  };

  return (
    <PopupWrapper>
      <PopupContent>
        <MenuWrapper>
          <User>
            <div className="user-img" />
            <div className="user-info">
              <p>이름</p>
              <p className="email">hamin031121@konkuk.ac.kr</p>
            </div>
          </User>
          <Menu
            onClick={() => setSelectedMenu("UserInfo")}
            selected={selectedMenu === "UserInfo"}
          >
            <img src={user} alt="user" />
            <p>개인정보</p>
          </Menu>
          <Menu
            onClick={() => setSelectedMenu("Payment")}
            selected={selectedMenu === "Payment"}
          >
            <img src={money} alt="money" />
            <p>결제 관리</p>
          </Menu>
        </MenuWrapper>
        <Content>
          <Header>개인정보 설정</Header>
          <section>{renderContent()}</section>
        </Content>
      </PopupContent>
    </PopupWrapper>
  );
}
