import React, { useState } from "react";
import {
  Header,
  Wrapper,
  TemplateWrapper,
  TemplateDescWrapper,
} from "./Templates.styles";

import TemplatePopup from "./TemplatePopup";

const TemplateDesc = ({ template, onClick }) => {
  return (
    <TemplateDescWrapper onClick={() => onClick(template)}>
      <img alt="template-img" src={template.img} className="template-img" />
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
      img: "http://via.placeholder.com/150x150",
    },
    {
      id: 2,
      name: "독창적이고 창의적인",
      description:
        "이거 시작한지 6시간 째 너무 힘들고 하루종일 디자인만 하고 있습니다.",
      img: "http://via.placeholder.com/150x150",
    },
    {
      id: 3,
      name: "단순하고 직관적인",
      description:
        "이거 시작한지 6시간 째 너무 힘들고 하루종일 디자인만 하고 있습니다.",
      img: "http://via.placeholder.com/150x150",
    },
  ];

  const handleTemplateClick = (template) => {
    setSelectedTemplate(template); // 클릭된 템플릿 저장
  };

  const handlePopupClose = () => {
    setSelectedTemplate(null); // 팝업 닫기
  };

  return (
    <div style={{ background: "black" }}>
      <Header>
        <div className="user-name">{name}</div>
        <img
          alt="user-img"
          src="http://via.placeholder.com/150x150"
          className="user-img"
        />
      </Header>
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
        <TemplatePopup handlePopupClose={handlePopupClose} />
      )}
    </div>
  );
};

export default Templates;
