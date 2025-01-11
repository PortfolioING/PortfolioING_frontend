import React, { useState, useEffect } from "react";
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
import Ping from "../../asset/ping.jsx";
import { Button } from "../Button/Button.styles.jsx";
import 수정버튼 from "../../asset/icons/수정버튼.svg";
import setting from "../../asset/icons/setting.svg";
import workspace from "../../asset/icons/workspace.svg";
function Menu() {
  const navigate = useNavigate();
  const location = useLocation();

  const handlers = {
    navigateToLogin: () => navigate("/login"),
    navigateToLogout: () => {
      sessionStorage.clear("userId");
      navigate("/");
    },
    navigatePrice: () => navigate("/price"),
    navigateSurvey: () => navigate("/survey"),
  };

  const [popup, setPopup] = useState(false);
  const isLoggedIn = true;

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (popup && !e.target.closest(".popup")) {
        setPopup(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [popup]);

  return (
    <>
      <Bar>
        <div className="left_menu">
          <Ping width={40} height={40} />
          <MenuItem
            isActive={location.pathname === "/about"}
            onClick={handlers.navigateAboutPing}
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
          {isLoggedIn ? (
            <>
              <MenuItem onClick={handlers.navigateSurvey}>
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
            <PopupItem onClick={handlers.navigateSettings}>
              <img src={setting} /> 설정
            </PopupItem>
            <PopupItem onClick={handlers.navigateWorkspace}>
              <img src={workspace} /> 워크스페이스
            </PopupItem>
            <hr />
            <PopupItem onClick={handlers.navigateToLogout}>로그아웃</PopupItem>
          </Popup>
        </PopupWrapper>
      )}
    </>
  );
}

export default Menu;
