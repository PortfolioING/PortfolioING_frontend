import "./MenuBar.styles";
import { Bar } from "./MenuBar.styles";
import { useNavigate } from "react-router-dom";
import Ping from "../../asset/ping.jsx";
import { Button } from "../Button/Button.styles.jsx";

function Menu() {
  const navigate = useNavigate();
  const handlers = {
    navigateToLogin: () => navigate("/login"),
    navigateToLogout: () => {
      sessionStorage.clear("userId");
      navigate("/");
    },
    navigateAboutPing: () => navigate("/about-ping"),
    navigatePrice: () => navigate("/price"),
    navigateUserPage: () => navigate("/user"),
    navigateSurvey: () => navigate("/survey"),
  };

  const isLoggedIn = sessionStorage.getItem("isLogin");

  return (
    <>
      <Bar>
        <div className="left_menu">
          <Ping width={40} height={40} />
          <p onClick={handlers.navigateAboutPing}>about PING</p>
          <p onClick={handlers.navigatePrice}>요금</p>
        </div>
        <div className="wrap_menu">
          {isLoggedIn ? (
            <>
              <Button
                onClick={handlers.navigateUserPage}
                children={"MyPage"}
                size="xs"
                mainColor="BlackWhiteB"
              />
              <Button
                onClick={handlers.navigateToLogout}
                children={"Logout"}
                size="xs"
                mainColor="BlackWhiteW"
              />
              <Button
                onClick={handlers.navigateSurvey}
                children={"무료로 시작하기"}
                size="xs"
                mainColor="LimeBlackL"
              />
            </>
          ) : (
            <>
              <Button
                onClick={handlers.navigateToLogin}
                children={"MyPage"}
                size="xs"
                mainColor="BlackWhiteB"
              />
              <Button
                onClick={handlers.navigateToLogin}
                children={"LogIn"}
                size="xs"
                mainColor="BlackWhiteW"
              />
              <Button
                onClick={handlers.navigateToLogin}
                children={"무료로 시작하기"}
                size="xs"
                mainColor="LimeBlackL"
              />
            </>
          )}
        </div>
      </Bar>
    </>
  );
}

export default Menu;
