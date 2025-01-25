import React from "react";
import { DefaultTemplateWrapper } from "./Default.styles";
import Title from "../../components/TemplateComponents/Title";
import Introduce from "../../components/TemplateComponents/Introduce";
import { RowWrapper } from "../../components/TemplateComponents/RowWrapper";
import Img from "../../components/TemplateComponents/Img";
import CareerTitle from "../../components/TemplateComponents/CareerTitle";
import CareerDesc from "../../components/TemplateComponents/CarrerDesc";
import Link from "../../components/TemplateComponents/Link";
import ProjectTitle from "../../components/TemplateComponents/ProjectTitle";
import ProjectDesc from "../../components/TemplateComponents/ProjectDesc";
import Text from "../../components/TemplateComponents/Text";
import ColumnWrapper from "../../components/TemplateComponents/ColumnWrapper";

export default function Default() {
  return (
    <DefaultTemplateWrapper>
      <div className="ping">PING Default Template</div>
      <Title color={"white"} />
      <RowWrapper>
        <Introduce color={"white"} />
        <Img color={"white"} />
      </RowWrapper>
      <Link color={"white"} />
      <ColumnWrapper>
        <CareerTitle color={"white"} />
        <CareerDesc color={"white"} />
      </ColumnWrapper>
      <RowWrapper>
        <Img color={"white"} guide={"project img"} />
        <ColumnWrapper>
          <ProjectTitle color={"white"} />
          <Link color={"white"} guide={"project link"} />
        </ColumnWrapper>
      </RowWrapper>

      <ProjectDesc color={"white"} />

      <Text color={"white"} />
    </DefaultTemplateWrapper>
  );
}
