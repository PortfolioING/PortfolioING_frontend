import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import Component from "../../interface/templateComponent";
import Wrapper from "./Wrapper/Wrapper";

export default function Introduce({
  guide = "자기소개를 해주세요.\n안녕하세요 프론트 개발자 권동희입니다!\n저는 무엇이든 열심히 어쩌고..",
  background,
  color,
}: Component) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // 높이를 자동으로 조정하는 함수
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
      <IntroduceStyle background={background} color={color}>
        <textarea
          ref={textareaRef}
          placeholder={guide}
          onInput={adjustHeight} // 입력할 때마다 높이 조정
        />
      </IntroduceStyle>
    </Wrapper>
  );
}

const IntroduceStyle = styled.div<{ background: string; color: string }>`
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
