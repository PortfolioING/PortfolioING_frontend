import React from "react";
import { TemplateWrapper } from "./TemplatePopup.styles";
import Button from "../../components/Button/Button";

const TemplatePopup = ({ handlePopupClose }) => {
  return (
    <TemplateWrapper>
      <div className="show-template">
        <div className="btn">{"<"}</div>
        <div className="template"></div>
        <div className="btn">{">"}</div>
      </div>
      <div className="btn-wrapper">
        <Button
          btnwidth="100px"
          btnheight="40px"
          onClick={handlePopupClose}
          btnfontWeight="700"
          childern={"돌아가기"}
          btnfontSize="15px"
        />
        <Button
          btnwidth="100px"
          btnheight="40px"
          btnbackgroundcolor="#E4FF0D"
          childern={"사용하기"}
          btnfontSize="15px"
          btnfontWeight="700"
        />
        <Button
          btnwidth="100px"
          btnheight="40px"
          childern={"색상변경"}
          btnfontSize="15px"
          btnfontWeight="700"
        />
      </div>
    </TemplateWrapper>
  );
};

export default TemplatePopup;
