import React from "react";
import { Wrapper } from "./CreativeProject.styles";

const CreativeProject = ({ color, ...props }) => {
  console.log(color);
  return (
    <Wrapper color={color}>
      <div className="project-number">{props.number}</div>
    </Wrapper>
  );
};

export default CreativeProject;
