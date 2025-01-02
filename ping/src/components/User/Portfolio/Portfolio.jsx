import React from "react";
import { PortfolioDesc, PortfolioWrapper, Img } from "./Portfolio.styles";
import Button from "../../Button/Button";
import Role from "../../Role/Role";
import Template1 from "../../../asset/template1-1.png";
import Template2 from "../../../asset/template2-1.png";
import { useNavigate } from "react-router-dom";

const Portfolio = ({ id, templateId, roles = [], img, title, updatedAt }) => {
  title = title || "Title이 존재하지 않습니다";
  updatedAt = updatedAt ? updatedAt.split("T")[0] : "Unknown";
  roles = roles.length > 0 ? roles : [""];

  const navigate = useNavigate();
  const handleShowPortfolio = () => {
    sessionStorage.setItem("portfolioId", id);
    navigate(`/template/${templateId}`);
  };

  return (
    <PortfolioWrapper>
      <Img>
        {templateId === 1 ? (
          <img src={Template1} alt="Template 1" />
        ) : templateId === 2 ? (
          <img src={Template2} alt="Template 2" />
        ) : (
          <div></div>
        )}
      </Img>
      <PortfolioDesc>
        <div className="title">{title}</div>
        <div className="category-wrapper">
          {roles.map((role, index) => (
            <Role key={index} role={role}>
              {role}
            </Role>
          ))}
        </div>
        <div className="btn-wrapper">
          <Button
            onClick={handleShowPortfolio}
            mainColor="BlackWhiteB"
            size="m"
          >
            보기
          </Button>
        </div>
        <div className="updatedAt">마지막 작업: {updatedAt}</div>
      </PortfolioDesc>
    </PortfolioWrapper>
  );
};

export default Portfolio;
