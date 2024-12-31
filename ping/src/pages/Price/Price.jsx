import { useNavigate } from "react-router-dom";
import MenuBar from "../../components/MenuBar/MenuBar";
import {
  DescWrapper,
  PriceContainer,
  StyledPriceCard,
  Desc,
} from "./Price.styles";
import Check from "../../asset/check.svg";
import { PRICE_DESCRIPTIONS } from "../../utils/constant/PriceDesc";

export default function PricePage() {
  const isLogin = sessionStorage.getItem("isLogin");
  return (
    <>
      <MenuBar />
      <PriceContainer>
        <PriceCard isLogin={isLogin} title="FREE" price="0" color="#000000" />
        <PriceCard
          isLogin={isLogin}
          title="STARTER"
          price="7,900"
          color="#3621B7"
        />
        <PriceCard
          isLogin={isLogin}
          title="PRO"
          price="13,900"
          color="#CD12DD"
        />
      </PriceContainer>
    </>
  );
}

function PriceCard({ title, price, color, isLogin }) {
  const navigate = useNavigate();
  const navigateLoginPage = () => {
    navigate("/login");
  };
  const navigateSurvey = () => {
    navigate("/");
  };
  const handleClick = () => {
    isLogin ? navigateSurvey() : navigateLoginPage();
  };
  return (
    <StyledPriceCard color={color}>
      <div className="price-card-title">{title}</div>
      <div className="price-card-cost">{price}원/ 월</div>
      <PriceDesc title={title} />
      <button className="price-card-button" onClick={handleClick}>
        선택
      </button>
    </StyledPriceCard>
  );
}
function PriceDesc({ title }) {
  const currentDesc =
    PRICE_DESCRIPTIONS.find((d) => d.key === title)?.descriptions || [];
  return (
    <DescWrapper>
      {currentDesc.map((d) => (
        <Desc isAble={d.isAble} key={d.desc}>
          <div className="img">
            <img src={Check} />
          </div>
          <p className="text">{d.desc}</p>
        </Desc>
      ))}
    </DescWrapper>
  );
}
