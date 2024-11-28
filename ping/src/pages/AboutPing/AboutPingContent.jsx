import React from "react";
import { AboutPingContentWrapper } from "./AboutPingContent.styles";
import FeatureIntroduce from "./FeatureIntroduce";
import MemberIntroduce from "./MemberIntroduce";

const AboutPingContent = ({ menu }) => {
  return (
    <AboutPingContentWrapper>
      {menu === "1" ? <FeatureIntroduce /> : null}
      {menu === "2" ? <MemberIntroduce /> : null}
    </AboutPingContentWrapper>
  );
};

export default AboutPingContent;
