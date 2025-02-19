import React, { useState, useEffect } from "react";
import "./UserMenuBar.styles";
import {
  PopupWrapper,
  Popup,
  PopupItem,
  UserIcon,
} from "./UserMenuBar.styles";
import 수정버튼 from "../../asset/icons/수정버튼.svg";
import setting from "../../asset/icons/setting.svg";
import workspace from "../../asset/icons/workspace.svg";

import Setting from "../SettingPopup/Setting.tsx";

function Menu() {
  const [popup, setPopup] = useState(false);
  const [isSettingOpen, setIsSettingOpen] = useState(false); // Setting 팝업 상태
  const isLoggedIn = true;

  const handlers = {
    navigateToLogin: () => navigate("/login"),
    navigateToLogout: () => {
      sessionStorage.clear("userId");
      navigate("/");
    }
  };

  const handleSettingPopupOpen = () => {
    setIsSettingOpen(true);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (popup && !e.target.closest(".popup"))
        setPopup(false);

      if (isSettingOpen && !e.target.closest(".popup-content")) {
        setIsSettingOpen(false);
      }

      // Setting 팝업 닫기
      if (
        isSettingOpen &&
        settingRef.current &&
        !settingRef.current.contains(e.target)
      ) {
        setIsSettingOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    
    return () => {
      // 이벤트 리스너 제거
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [popup, isSettingOpen]);

  return (
    <>
      <div className="right_menu">
        {isLoggedIn ? (
          <>
            <UserIcon onClick={() => setPopup(!popup)} />
          </>
        ) : (
          <>
            <Button
              onClick={handlers.navigateToLogin}
              children={"LogIn"}
              size="s"
              width="90px"
              height="40px"
            />
          </>
        )}
      </div>
        
      {popup && (
        <PopupWrapper>
          <Popup className="popup">
            <div className="popup-header">
              <div className="left">
                <p className="nickname">닉네임</p>
                <p className="email">example@konkuk.ac.kr</p>
              </div>
              <img src={수정버튼} />
            </div>

            <hr />

            <PopupItem onClick={handleSettingPopupOpen}>
              <img src={setting} /> 설정</PopupItem>
            <PopupItem onClick={handlers.navigateWorkspace}>
              <img src={workspace} /> 워크스페이스</PopupItem>

            <hr />

            <PopupItem onClick={handlers.navigateToLogout}>로그아웃</PopupItem>
          </Popup>
        </PopupWrapper>
      )}
      {isSettingOpen && <Setting />}
    </>
  );
}

export default Menu;
