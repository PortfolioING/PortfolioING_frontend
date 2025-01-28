import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import Component from "../../interface/templateComponent";
import Wrapper from "./Wrapper/Wrapper";

export default function Title({
  guide = "포토폴리오의 제목을 입력해주세요.",
  background,
  color,
}: Component) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const adjustHeight = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`; // 스크롤 높이에 따라 설정
    }
  };

  useEffect(() => {
    adjustHeight(); // 컴포넌트가 처음 렌더링될 때 높이 조정
  }, []);
  return (
    <Wrapper>
      <TitleStyle background={background} color={color}>
        <textarea
          rows={1}
          ref={textareaRef}
          placeholder={guide}
          onInput={adjustHeight}
        />
      </TitleStyle>
    </Wrapper>
  );
}
const TitleStyle = styled.div<{ background: string; color: string }>`
  width: 100%;
  background: ${(props) => props.background};
  color: ${(props) => props.color};
  textarea {
    width: 100%;
    font-size: 30px;
    height: 20px;
    color: ${(props) => props.color};
    border: none;
    outline: none;
    background: transparent;
    resize: none; /* 크기 조정 비활성화 */
    line-height: 1.5;
    white-space: pre-wrap;
    overflow: hidden; /* 스크롤바 숨김 */
  }
`;
