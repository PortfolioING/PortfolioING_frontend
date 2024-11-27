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
          <Button children="보기" mainColor="BlackWhite" size="sm" />
          {/* <Button children="수정" mainColor="WhiteBlack" size="sm" /> */}
        </div>
        <div className="last">마지막 작업: {last}</div>
      </PortfolioDesc>
    </PortfolioWrapper>
  );
};

export default Portfolio;
