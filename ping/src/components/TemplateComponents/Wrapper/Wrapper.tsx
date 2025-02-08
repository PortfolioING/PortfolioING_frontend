import React, { useState } from "react";
import styled from "styled-components";

export default function Wrapper({ children }: { children: React.ReactNode }) {
  const [isHovered, setIsHovered] = useState(false);
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
    opacity: 0;
    transition: opacity 0.2s ease-in-out;
  }

  > .button.visible {
    opacity: 1;
  }

  > div:nth-child(2) {
    flex: 1;
    position: relative;
  }
`;
