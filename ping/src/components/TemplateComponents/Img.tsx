import React from "react";
import styled from "styled-components";
import Component from "../../interface/templateComponent";
import Wrapper from "./Wrapper/Wrapper";

export default function Img({
  guide = "본인의 이미지를 넣어주세요!",
  background,
  color,
}: Component) {
  return (
    <Wrapper>
      <ImgStyle background={background} color={color}>
        <input placeholder={guide} />
      </ImgStyle>
    </Wrapper>
  );
}

const ImgStyle = styled.div<{ background: string; color: string }>`
  width: 100%;
  background: ${(props) => props.background};
  color: ${(props) => props.color};

  input {
    width: 100%;
    height: 100px;
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
