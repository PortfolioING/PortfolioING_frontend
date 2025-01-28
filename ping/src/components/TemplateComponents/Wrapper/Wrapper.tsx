import React, { useState } from "react";
import styled from "styled-components";

export default function Wrapper({ children }: { children: React.ReactNode }) {
  const [isHovered, setIsHovered] = useState(false); // 마우스 호버 상태 관리
  const handleSave = () => {
    const input = document.querySelector("input") as HTMLInputElement;
    if (input) {
      const value = input.value;
    }
  };
  const handleDrag = () => {
    console.log("darg enter");
  };
  return (
    <WrapperStyle
      onBlur={() => handleSave()}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onDragEnter={handleDrag}
    >
      <div className={`button ${isHovered ? "visible" : ""}`}>P</div>
      <div>{children}</div>
    </WrapperStyle>
  );
}

const WrapperStyle = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 10px;
  box-sizing: border-box;

  > .button {
    cursor: pointer;
    color: white;
    opacity: 0; /* 기본적으로 숨김 */
    transition: opacity 0.2s ease-in-out; /* 부드럽게 보이기 */
  }

  > .button.visible {
    opacity: 1; /* 마우스 호버 시 버튼 보이기 */
  }

  > div:nth-child(2) {
    flex: 1; /* 자식 요소가 Flexbox 컨테이너의 남은 공간을 차지 */
    position: relative; /* 호버 대상 영역을 설정 */
  }
`;
