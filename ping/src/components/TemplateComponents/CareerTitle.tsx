import React from "react";
import styled from "styled-components";
import Component from "../../interface/templateComponent";
import Wrapper from "./Wrapper/Wrapper";

export default function CareerTitle({
  guide = "Career Title을 적어주세요",
  background,
  color,
}: Component) {
  return (
    <Wrapper>
      <CareerTitleStyle background={background} color={color}>
        <input placeholder={guide} />
      </CareerTitleStyle>
    </Wrapper>
  );
}

const CareerTitleStyle = styled.div<{ background: string; color: string }>`
  width: 100%;
  background: ${(props) => props.background};
  color: ${(props) => props.color};

  input {
    width: 100%;
    padding: 8px;
    font-size: 20px;
    color: ${(props) => props.color};
    border: none;
    outline: none;
    padding: 0;
    background: transparent;
    resize: none;
    line-height: 1.5;
  }
`;
