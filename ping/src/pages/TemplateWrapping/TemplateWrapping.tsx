import React from "react";
import { Container } from "./TemplateWrapping.styles";
import Default from "../../템플릿/Default/Default";
import SideStyleBar from "../../components/SideStyleBar/SideStyleBar";

const TemplateWrapping = () => {
  return (
    <Container>
      <Default />
      <SideStyleBar />
    </Container>
  );
};

export default TemplateWrapping;
