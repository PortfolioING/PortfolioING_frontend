import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import Component from "../../interface/templateComponent";
import Wrapper from "./Wrapper/Wrapper";

export default function Text({
  guide = "Text을 적어주세요",
  background,
  color,
}: Component) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const adjustHeight = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto"; // 높이를 초기화
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`; // 스크롤 높이에 따라 설정
    }
  };

  useEffect(() => {
    adjustHeight(); // 컴포넌트가 처음 렌더링될 때 높이 조정
  }, []);
  return (
    <Wrapper>
      <TextStyle background={background} color={color}>
        <textarea
          rows={1}
          ref={textareaRef}
          placeholder={guide}
          onInput={adjustHeight}
        />
      </TextStyle>
    </Wrapper>
  );
}

const TextStyle = styled.div<{ background: string; color: string }>`
  width: 100%;
  background: ${(props) => props.background};
  color: ${(props) => props.color};
  textarea {
    width: 100%;
    font-size: 18px;
    color: ${(props) => props.color};
    border: none;
    outline: none;
    background: transparent;
    resize: none; /* 크기 조정 비활성화 */
    line-height: 1.5;
    overflow: hidden; /* 스크롤바 숨김 */
  }
`;
