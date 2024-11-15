import React, { useState } from "react";
import {
  Wrapper,
  TemplateWrapper,
  TemplateDescWrapper,
} from "./Templates.styles";
import Template1 from "../../asset/template1-1.png";
import Template2 from "../../asset/template2-1.png";
import Template3 from "../../asset/template3-1.png";

import Menu from "../../components/MenuBar/MenuBar";

import TemplatePopup from "./TemplatePopup";

const TemplateDesc = ({ template, onClick }) => {
  return (
    <TemplateDescWrapper onClick={() => onClick(template)}>
      <img src={template.img} alt="template-img" className="template-img" />
      <div className="template-desc">
        <div className="name">{template.name}</div>
        <div className="description">{template.description}</div>
      </div>
    </TemplateDescWrapper>
  );
};

const Templates = ({ name }) => {
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const templates = [
    {
      id: 1,
      name: "깔끔하고 가독성 좋은",
      description:
        "이거 시작한지 6시간 째 너무 힘들고 하루종일 디자인만 하고 있습니다.",
      img: Template1,
    },
    {
      id: 2,
      name: "독창적이고 창의적인",
      description:
        "이거 시작한지 6시간 째 너무 힘들고 하루종일 디자인만 하고 있습니다.",
      img: Template2,
    },
    {
      id: 3,
      name: "단순하고 직관적인",
      description:
        "이거 시작한지 6시간 째 너무 힘들고 하루종일 디자인만 하고 있습니다.",
      img: Template3,
    },
  ];

  const handleTemplateClick = (template) => {
    setSelectedTemplate(template); // 클릭된 템플릿 저장
  };

  const handlePopupClose = () => {
    setSelectedTemplate(null); // 팝업 닫기
  };
  return (
    <div>
      <Menu />
      <Wrapper>
        <div className="title">포토폴리오 템플릿</div>
        <TemplateWrapper>
          {templates.map((template) => (
            <TemplateDesc
              key={template.id}
              template={template}
              onClick={handleTemplateClick}
            />
          ))}
        </TemplateWrapper>
      </Wrapper>
      {selectedTemplate && (
        <TemplatePopup
          handlePopupClose={handlePopupClose}
          template={selectedTemplate}
        />
      )}
    </div>
  );
};

export default Templates;
