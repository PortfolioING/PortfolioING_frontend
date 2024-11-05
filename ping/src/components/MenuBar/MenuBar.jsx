import "./MenuBar.styles";
import { Bar, Placeholder } from "./MenuBar.styles";
import { useNavigate } from "react-router-dom";
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
  return (
    <>
      <Placeholder />
      <Bar>
        <div className="wrap_menu">
          <p>🤍</p>
          <p>about PING</p>
          <p>주요기능</p>
          <p onClick={navigatePrice}>요금</p>
          <p>기타</p>
        </div>
        <div className="wrap_menu">
          <p onClick={navigateUserPage}>My Page</p>
          <button className="login_btn" onClick={navigateToLogin}>
            login
          </button>
          <button className="free_btn"> 무료로 시작하기</button>
        </div>
      </Bar>
    </>
  );
}
export default Menu;
