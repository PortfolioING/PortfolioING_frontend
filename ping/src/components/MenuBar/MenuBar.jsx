import "./MenuBar.styles";
import { Bar, Placeholder } from "./MenuBar.styles";
import { useNavigate } from "react-router-dom";
function Menu({ login = false }) {
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
          {login ? (
            <></>
          ) : (
            <>
              <button className="login_btn" onClick={navigateToLogin}>
                Login
              </button>
              <button className="free_btn">무료로 시작하기</button>
            </>
          )}
        </div>
      </Bar>
    </>
  );
}
export default Menu;
