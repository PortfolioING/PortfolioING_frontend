import React from "react";
import styled from "styled-components";
import Component from "../../interface/templateComponent";
import Wrapper from "./Wrapper/Wrapper";

export default function CareerDesc({
  guide = "Career Desc을 적어주세요",
  background,
  color,
}: Component) {
  return (
    <Wrapper>
      <CareerDescStyle background={background} color={color}>
        <input placeholder={guide} />
      </CareerDescStyle>
    </Wrapper>
  );
}

const CareerDescStyle = styled.div<{ background: string; color: string }>`
  width: 100%;
  background: ${(props) => props.background};
  color: ${(props) => props.color};

  input {
    width: 100%;

    padding: 8px;
    font-size: 17px;
    color: ${(props) => props.color};
    border: none;
    outline: none;
    padding: 0;
    background: transparent;
    resize: none;
    line-height: 1.5;
  }
`;
