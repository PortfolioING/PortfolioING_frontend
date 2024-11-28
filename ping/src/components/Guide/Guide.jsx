import React from "react";

import Ping from "../../asset/ping";
import {
  GuideWrapper,
  BubbleBody,
  BubbleWrapper,
  BubbleTail,
} from "./Guide.styles";

const SpeechBubble = ({ text }) => {
  return (
    <BubbleWrapper>
      <BubbleBody>
        <div className="text">{text}</div>
        <div className="tail-dot" />
      </BubbleBody>
      <BubbleTail />
    </BubbleWrapper>
  );
};

const Guide = ({ text }) => {
  return (
    <GuideWrapper>
      <SpeechBubble className="bubble" text={text} />
      <Ping
        fillPath1="black"
        fillPath2="#EAFF0D"
        className="ping"
        width={50}
        height={80}
      />
    </GuideWrapper>
  );
};

export default Guide;
