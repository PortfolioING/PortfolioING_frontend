import React from "react";
import {
  PortfolioDesc,
  PortfolioWrapper,
  ImgWrapper,
  Category,
} from "./Portfolio.styles";
import Button from "../Button/Button";

const Portfolio = (props) => {
  const { categories, img, title, last } = props;

  const categoriesArray = categories.split(",").map((item) => item.trim());
  console.log(categoriesArray[0]);
  return (
    <PortfolioWrapper>
      <ImgWrapper>
        <img src={img} alt="portfolio img" />
      </ImgWrapper>
      <PortfolioDesc>
        <div className="title">{title}</div>
        <div className="category-wrapper">
          {categoriesArray.map((category, index) => (
            <Category key={index} category={category}>
              {category}
            </Category>
          ))}
        </div>
        <div className="btn-wrapper">
          <Button
            children="보기"
            btnbordercolor="black"
            btnfontcolor="white"
            btnwidth="100px"
            btnheight="32px"
            btnfontSize="15px"
            btnbackgroundcolor="black"
          />
          <Button
            children="수정"
            btnbordercolor="black"
            btnfontcolor="black"
            btnwidth="100px"
            btnheight="32px"
            btnfontSize="15px"
            btnbackgroundcolor="white"
          />
        </div>
        <div className="last">마지막 작업: {last}</div>
      </PortfolioDesc>
    </PortfolioWrapper>
  );
};

export default Portfolio;
