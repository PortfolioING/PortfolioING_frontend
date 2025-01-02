import React from "react";
import {
  PortfolioDesc,
  PortfolioWrapper,
  ImgWrapper,
} from "./Portfolio.styles";
import Button from "../../Button/Button";
import Role from "../../Role/Role";
import Template1 from "../../../asset/template1-1.png";
import Template2 from "../../../asset/template2-1.png";
import { useNavigate } from "react-router-dom";
const Portfolio = ({ id, templateId, roles = [], img, title, last }) => {
  title = title == "" ? "Title이 존재하지 않습니다" : title;
  last = last ? last.split("T")[0] : "Unknown";
  roles = roles.length > 0 ? roles : ["역할 x"];
  const navigate = useNavigate();
  const handleShowPortfolio = () => {
    sessionStorage.setItem("portfolioId", id);
    navigate(`/template/${templateId}`);
  };
  return (
    <PortfolioWrapper>
      <ImgWrapper>
        {templateId === 1 ? (
          <img src={Template1} alt="Template 1" />
        ) : templateId === 2 ? (
          <img src={Template2} alt="Template 2" />
        ) : (
          <div></div>
        )}
      </ImgWrapper>
      <PortfolioDesc>
        <div className="title">{title}</div>
        <div className="category-wrapper">
          {roles.map((category, index) => (
            <Role key={index} role={category}>
              [role]
            </Role>
          ))}
        </div>
        <div className="btn-wrapper">
          <Button
            onClick={handleShowPortfolio}
            children="보기"
            mainColor="BlackWhiteB"
            size="m"
          />
        </div>
        <div className="last">마지막 작업: {last}</div>
      </PortfolioDesc>
    </PortfolioWrapper>
  );
};

export default Portfolio;
