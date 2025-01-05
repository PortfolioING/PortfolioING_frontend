import React from "react";
import { Button } from "./PortfolioButton.styles";
import { useNavigate } from "react-router-dom";

const PortfolioButton = () => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate("/templates");
  };
  const handleSave = () => {
    navigate("/user");
  };

  return (
    <Button>
      <div className="goback-btn" onClick={handleGoBack}>
        돌아가기
      </div>
      <div className="save-btn" onClick={handleSave}>
        저장하기
      </div>
    </Button>
  );
};

export default PortfolioButton;
