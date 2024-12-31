import MenuBar from "../../components/MenuBar/MenuBar";
import { FullLogo } from "./Main.styles";

function Main() {
  return (
    <>
      <MenuBar />
      <Content />
    </>
  );
}
function Content() {
  return <Logo />;
}
function Logo() {
  return (
    <FullLogo>
      <div className="slogan">나를 담는 가장 쉬운 방법</div>;
      <div className="fullName">
        <p>Portfolio-</p>
        <p>ING</p>
      </div>
    </FullLogo>
  );
}
function OtherPortfolio() {
  return <div></div>;
}

export default Main;
