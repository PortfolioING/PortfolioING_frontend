import React, { useState } from "react";
import { DefaultTemplateWrapper } from "./Default.styles";
import Title from "../../components/TemplateComponents/Title";
import Introduce from "../../components/TemplateComponents/Introduce";
import RowWrapper from "../../components/TemplateComponents/RowWrapper";
import Img from "../../components/TemplateComponents/Img";
import CareerTitle from "../../components/TemplateComponents/CareerTitle";
import CareerDesc from "../../components/TemplateComponents/CarrerDesc";
import Link from "../../components/TemplateComponents/Link";
import ProjectTitle from "../../components/TemplateComponents/ProjectTitle";
import ProjectDesc from "../../components/TemplateComponents/ProjectDesc";
import Text from "../../components/TemplateComponents/Text";

export default function Default() {
  return (
    <DefaultTemplateWrapper>
      <div className="ping">PING Default Template</div>
      <RowWrapper>
        <Title color={"white"} />
      </RowWrapper>
      <RowWrapper>
        <Introduce color={"white"} />
        <Img color={"white"} />
      </RowWrapper>
      <RowWrapper>
        <Link color={"white"} />
      </RowWrapper>
      <RowWrapper>
        <CareerTitle color={"white"} />
      </RowWrapper>
      <RowWrapper>
        <CareerDesc color={"white"} />
      </RowWrapper>

      <RowWrapper>
        <ProjectTitle color={"white"} />
        <Link color={"white"} guide={"project link"} />

        <Img color={"white"} guide={"project img"} />
      </RowWrapper>
      <RowWrapper>
        <ProjectDesc color={"white"} />
      </RowWrapper>
      <RowWrapper>
        <Text color={"white"} />
      </RowWrapper>
    </DefaultTemplateWrapper>
  );
}
