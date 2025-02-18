import React, { useState, useEffect, useRef } from "react";
import "./MenuBar.styles";
import {
  Bar,
  MenuItem,
  UserIcon,
  PopupWrapper,
  Popup,
  PopupItem,
} from "./MenuBar.styles";
import { useLocation, useNavigate } from "react-router-dom";

import Setting from "../SettingPopup/Setting.tsx";

import Ping from "../../asset/ping.jsx";
import { Button } from "../Button/Button.styles.jsx";
import 수정버튼 from "../../asset/icons/수정버튼.svg";
import setting from "../../asset/icons/setting.svg";
import workspace from "../../asset/icons/workspace.svg";

function Menu() {
  const navigate = useNavigate();
  const location = useLocation();

  // 상태 관리
  const [popup, setPopup] = useState(false);
  const [isSettingOpen, setIsSettingOpen] = useState(false); // Setting 팝업 상태

  // 팝업 참조 설정
  const settingRef = useRef(null);

  const handlers = {
    navigateToLogin: () => navigate("/login"),
    navigateToLogout: () => {
      sessionStorage.clear("userId");
      navigate("/");
    },
    navigatePrice: () => navigate("/price"),
    navigateDefaultTemplate: () => navigate("/default-template"),
    navigateWorkspace: () => navigate("/workspace"),
  };
  const handleSettingPopupOpen = () => {
    setIsSettingOpen(true);
  };
  useEffect(() => {
    const handleClickOutside = (e) => {
      // UserIcon 팝업 닫기
      if (popup && !e.target.closest(".popup")) {
        setPopup(false);
      }
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

    // 이벤트 리스너 추가
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // 이벤트 리스너 제거
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [popup, isSettingOpen]);

  return (
    <>
      <Bar>
        <div className="left_menu">
          <Ping width={40} height={40} />
          <MenuItem
            isActive={location.pathname === "/about-ping"}
            onClick={() => navigate("/about-ping")}
          >
            About PING
          </MenuItem>
          <MenuItem
            isActive={location.pathname === "/price"}
            onClick={handlers.navigatePrice}
          >
            요금
          </MenuItem>
        </div>
        <div className="right_menu">
          {true ? (
            <>
              <MenuItem onClick={handlers.navigateDefaultTemplate}>
                무료로 시작하기
              </MenuItem>
              <UserIcon onClick={() => setPopup(!popup)} />
            </>
          ) : (
            <>
              <MenuItem onClick={handlers.navigateToLogin}>
                무료로 시작하기
              </MenuItem>
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
      </Bar>
      <div style={{ height: "100px" }}></div>
      {popup && (
        <PopupWrapper>
          <Popup className="popup">
            <div className="popup-header">
              <div className="left">
                <p className="nickname">닉네임</p>
                <p className="email">example@konkuk.ac.kr</p>
              </div>
              <img src={수정버튼} alt="수정 버튼" />
            </div>
            <hr />
            <PopupItem onClick={handleSettingPopupOpen}>
              <img src={setting} alt="설정 아이콘" /> 설정
            </PopupItem>
            <PopupItem onClick={handlers.navigateWorkspace}>
              <img src={workspace} alt="워크스페이스 아이콘" /> 워크스페이스
            </PopupItem>
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
