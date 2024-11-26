import React, { useState } from "react";
import { TemplateWrapper } from "./TemplatePopup.styles";
import Button from "../../components/Button/Button";

import Template1_1 from "../../asset/template1-1.png";
import Template1_2 from "../../asset/template1-2.png";
import Template2_1 from "../../asset/template2-1.png";
import Template2_2 from "../../asset/template2-2.png";
import Template3_1 from "../../asset/template3-1.png";
import Template3_2 from "../../asset/template3-2.png";
import { useNavigate } from "react-router-dom";
import PutTemplate from "../../apis/putTemplate";

const TemplatePopup = ({ handlePopupClose, template }) => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0); // 현재 이미지 인덱스 관리

  const templateSrc = [
    {
      id: 1,
      images: [Template1_1, Template1_2],
    },
    {
      id: 2,
      images: [Template2_1, Template2_2],
    },
    {
      id: 3,
      images: [Template3_1, Template3_2],
    },
  ];

  const currentTemplate = templateSrc.find((item) => item.id === template.id);
  const images = currentTemplate ? currentTemplate.images : [];

  const handleRight = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleLeft = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleUpdateTemplate = async (e) => {
    e.preventDefault();

    const templateId = template.id;

    try {
      const response = await PutTemplate(templateId);
      console.log("Portfolio update 성공", response);
      navigate(`/template/${templateId}`);
      // navigate("");
    } catch (error) {
      console.error("Portfolio update 중 오류 발생:", error);
    }
  };
  return (
    <TemplateWrapper>
      <div className="show-template">
        <div className="btn" onClick={handleLeft}>
          {"<"}
        </div>
        <div className="template">
          <img src={images[currentIndex]} alt="template" />
        </div>
        <div className="btn" onClick={handleRight}>
          {">"}
        </div>
      </div>
      <div className="btn-wrapper">
        <Button
          size="sm"
          mainColor="LimeBlack"
          onClick={handlePopupClose}
          children="돌아가기"
        />
        <Button
          size="sm"
          mainColor="LimeBlack"
          onClick={handleUpdateTemplate}
          children="사용하기"
        />
      </div>
    </TemplateWrapper>
  );
};

export default TemplatePopup;
