import { useNavigate } from "react-router-dom";
import MenuBar from "../../components/MenuBar/MenuBar";
import {
  DescWrapper,
  PriceContainer,
  StyledPriceCard,
  Desc,
} from "./Price.styles";
import Check from "../../asset/check.svg";
export default function PricePage() {
  return (
    <>
      <MenuBar />
      <PriceContainer>
        <PriceCard title="FREE" price="0" color="#000000" />
        <PriceCard title="STARTER" price="7,900" color="#3621B7" />
        <PriceCard title="PRO" price="13,900" color="#CD12DD" />
      </PriceContainer>
    </>
  );
}
function PriceDesc({ title }) {
  const desc = [
    {
      isAble: true,
      desc: "다른 유저들의 포트폴리오 열람 가능",
    },
    {
      isAble: false,
      desc: "템플릿 특성 변경 가능",
    },
    {
      isAble: false,
      desc: "10번의 무료 배포",
    },
    {
      isAble: false,
      desc: "더 많은 템플릿",
    },
    {
      isAble: false,
      desc: "다른 유저들의 포트폴리오 열람 가능",
    },
  ];
  if (title == "STARTER") {
    desc[1].isAble = true;
    desc[2].isAble = true;
  } else if (title == "PRO") {
    desc.map((d) => (d.isAble = true));
  }
  return (
    <DescWrapper>
      {desc.map((d) => (
        <Desc isAble={d.isAble}>
          <div className="img">
            <img src={Check} />
          </div>
          <p className="text">{d.desc}</p>
        </Desc>
      ))}
    </DescWrapper>
  );
}
function PriceCard({ title, price, color }) {
  const navigate = useNavigate();
  const navigateLoginPage = () => {
    navigate("/login");
  };
  const navigateSurvey = () => {
    navigate("/");
  };
  const handleClick = () => {
    isLoggedIn ? navigateSurvey() : navigateLoginPage();
  };
  return (
    <StyledPriceCard color={color}>
      <div className="price-card-title">{title}</div>
      <div className="price-card-cost">
        <p className="price-card-value">{price}원</p>
        <p className="price-card-duration">/ 월</p>
      </div>
      <p className="price-card-description">{<PriceDesc title={title} />}</p>

      <button className={`price-card-button`} onClick={handleClick}>
        선택
      </button>
    </StyledPriceCard>
  );
}
