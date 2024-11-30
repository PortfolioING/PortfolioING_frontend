import React from "react";
import {
  PortfolioDesc,
  PortfolioWrapper,
  ImgWrapper,
  Category,
} from "./Portfolio.styles";
import Button from "../Button/Button";
import Template1 from "../../asset/template1-1.png";
import Template2 from "../../asset/template2-1.png";

const Portfolio = ({ templateId, roles = [], img, title, last }) => {
  title = title == "" ? "Title이 존재하지 않습니다" : title;
  last = last ? last.split("T")[0] : "Unknown";
  console.log(roles);
  roles = roles.length > 1 ? roles : ["역할 x"];

  return (
    <PortfolioWrapper>
      <ImgWrapper>
        {templateId === "1" ? (
          <img src={Template1} alt="Template 1" />
        ) : templateId === "2" ? (
          <img src={Template2} alt="Template 2" />
        ) : (
          <div></div>
        )}
      </ImgWrapper>
      <PortfolioDesc>
        <div className="title">{title}</div>
        <div className="category-wrapper">
          {roles.map((category, index) => (
            <Category key={index} category={category}>
              {category}
            </Category>
          ))}
        </div>
        <div className="btn-wrapper">
          <Button children="보기" mainColor="BlackWhite" size="sm" />
        </div>
        <div className="last">마지막 작업: {last}</div>
      </PortfolioDesc>
    </PortfolioWrapper>
  );
};

export default Portfolio;
