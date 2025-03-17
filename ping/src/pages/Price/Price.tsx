import { useNavigate } from "react-router-dom";
import MenuBar from "../../components/MenuBar/MenuBar";
import {
  DescWrapper,
  PriceContainer,
  StyledPriceCard,
  Desc,
} from "./Price.styles";
import Check from "../../asset/icons/check.svg";
import { PRICE_DESCRIPTIONS } from "../../utils/constant/PriceDesc";
import React from "react";
import Button from "../../components/Button/Button";
interface PriceCardProps {
  title: string;
  price: string;
  selected?: boolean;
  isLogin: boolean;
}

interface PriceDescProps {
  title: string;
}

export default function Price() {
  const isLogin = sessionStorage.getItem("isLogin") === "true";

  return (
    <>
      <MenuBar />
      <PriceContainer>
        <PriceCard isLogin={isLogin} title="Free" price="0" />
        <PriceCard isLogin={isLogin} title="Starter" price="7,900" selected />
        <PriceCard isLogin={isLogin} title="Pro" price="13,900" />
      </PriceContainer>
    </>
  );
}

function PriceCard({
  title,
  price,
  selected = false,
  isLogin,
}: PriceCardProps) {
  const navigate = useNavigate();

  const navigateLoginPage = (): void => {
    navigate("/login");
  };

  const navigateSurvey = (): void => {
    navigate("/");
  };

  const handleClick = (): void => {
    isLogin ? navigateSurvey() : navigateLoginPage();
  };

  return (
    <StyledPriceCard selected={selected}>
      <div className="price-card-title">{title}</div>
      <div className="price-card-cost">
        <p className="bold">{price}원</p>
        <p>/ 월</p>
      </div>
      <PriceDesc title={title} />
      <Button
        size="m"
        width={"100%"}
        height="45px"
        children={"선택"}
        onClick={handleClick}
      />
    </StyledPriceCard>
  );
}

function PriceDesc({ title }: PriceDescProps) {
  const currentDesc =
    PRICE_DESCRIPTIONS.find((d) => d.key === title)?.descriptions || [];

  return (
    <DescWrapper>
      {currentDesc.map((d) => (
        <Desc isAble={d.isAble} key={d.desc}>
          <div className="img">
            <img src={Check} alt="check icon" />
          </div>
          <p className="text">{d.desc}</p>
        </Desc>
      ))}
    </DescWrapper>
  );
}
