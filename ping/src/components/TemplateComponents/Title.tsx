import React from "react";
import styled from "styled-components";
import Component from "../../interface/templateComponent";
import Wrapper from "./Wrapper/Wrapper";

export default function Title({
  guide = "포토폴리오의 제목을 입력해주세요.",
  background,
  color,
}: Component) {
  return (
    <Wrapper>
      <TitleStyle background={background} color={color}>
        <input type="text" placeholder={guide} />
      </TitleStyle>
    </Wrapper>
  );
}
const TitleStyle = styled.div<{ background: string; color: string }>`
  width: 100%;
  background: ${(props) => props.background};
  color: ${(props) => props.color};
  input {
    width: 100%;
    padding: 8px;
    font-size: 30px;
    color: ${(props) => props.color};
    border: none;
    outline: none;
    padding: 0;
    background: transparent;
  }
`;
