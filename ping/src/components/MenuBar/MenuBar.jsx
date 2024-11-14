import { useContext } from "react";
import "./MenuBar.styles";
import { Bar, Placeholder } from "./MenuBar.styles";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../../pages/LoginContext";
function Menu() {
  const navigate = useNavigate();
  const navigateToLogin = () => {
    navigate("/login");
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

  const { isLoggedIn } = useContext(LoginContext);
  return (
    <>
      <Placeholder />
      <Bar>
        <div className="left_menu">
          <p>🤍</p>
          <p>about PING</p>
          <p onClick={navigatePrice}>요금</p>
        </div>
        <div className="wrap_menu">
          <p onClick={navigateUserPage}>My Page</p>
          {isLoggedIn ? (
            <>
              <button className="free_btn" onClick={navigateSurvey}>
                무료로 시작하기
              </button>
            </>
          ) : (
            <>
              <button className="login_btn" onClick={navigateToLogin}>
                Login
              </button>
              <button className="free_btn" onClick={navigateLoginPage}>
                무료로 시작하기
              </button>
            </>
          )}
        </div>
      </Bar>
    </>
  );
}
export default Menu;
