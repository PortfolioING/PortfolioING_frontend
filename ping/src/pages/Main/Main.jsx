import MenuBar from "../../components/MenuBar/MenuBar";
import { FullLogo } from "./Main.styles";
function Slogan() {
  return <div className="slogan">나를 담는 가장 쉬운 방법</div>;
}
function PortfolioSlide() {
  return (
    <FullLogo>
      <Slogan />
      <div className="fullName">
        <p>Portfolio-</p>
        <p>ING</p>
      </div>
    </FullLogo>
  );
}
function MainPage() {
  return (
    <div>
      <MenuBar />
      <PortfolioSlide />
    </div>
  );
}
export default MainPage;
