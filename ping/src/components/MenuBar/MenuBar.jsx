import "./MenuBar.styles";
import { Bar, Placeholder } from "./MenuBar.styles";
import { useNavigate } from "react-router-dom";

import Ping from "../../asset/ping.jsx";
import { Button } from "../Button/Button.styles.jsx";
function Menu() {
  const navigate = useNavigate();
  const navigateToLogin = () => {
    navigate("/login");
  };
  const navigateToLogout = () => {
    sessionStorage.clear("userId");
    navigate("/");
  };
  const navigatePrice = () => {
    navigate("/price");
  };
  const navigateUserPage = () => {
    navigate("/user");
  };
  const navigateLoginPage = () => {
    navigate("/login");
  };
  const navigateSurvey = () => {
    navigate("/survey");
  };

  const loginIn = sessionStorage.getItem("isLogin"); // 로그인 정보를 가져옴
  console.log(loginIn);
  return (
    <>
      <Placeholder />
      <Bar>
        <div className="left_menu">
          <Ping width={40} height={40} />
          <p>about PING</p>
          <p onClick={navigatePrice}>요금</p>
        </div>
        <div className="wrap_menu">
          {loginIn ? (
            <>
              <Button
                onClick={navigateUserPage}
                children={"MyPage"}
                size="xs"
                mainColor="BlackWhite"
              />

              <Button
                onClick={navigateToLogout}
                children={"Logout"}
                size="xs"
                mainColor="BlackWhiteW"
              />

              <Button
                onClick={navigateSurvey}
                children={"무료로 시작하기"}
                size="sm"
                mainColor="LimeBlack"
              />
            </>
          ) : (
            <>
              <Button
                onClick={navigateLoginPage}
                children={"MyPage"}
                size="xs"
                mainColor="BlackWhite"
              />

              <Button
                onClick={navigateToLogin}
                children={"LogIn"}
                size="xs"
                mainColor="BlackWhiteW"
              />

              <Button
                onClick={navigateLoginPage}
                children={"무료로 시작하기"}
                size="sm"
                mainColor="LimeBlack"
              />
            </>
          )}
        </div>
      </Bar>
    </>
  );
}
export default Menu;
