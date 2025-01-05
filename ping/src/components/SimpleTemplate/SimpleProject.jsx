import React, { useState, useEffect } from "react";
import { Wrapper, Content, MainContainer } from "./Simple.styles";
import {
  ProjectHeader,
  ProjectLeftSection,
  ProjectRightSection,
  DescriptionWrapper,
  PNSWrapper,
} from "./SimpleProject.styles";

import { useParams } from "react-router-dom";
import GetProject from "../../apis/getProject";
import PortfolioButton from "../PortfolioButton/PortfolioButton";

const ProjectRight = ({ project, color }) => (
  <ProjectRightSection color={color}>
    <div className="project-image">{project.image}</div>
    <DescriptionWrapper>
      <div className="description-item">
        <div className="item-title">Date</div>
        <div>
          {project.startDate} ~ {project.endDate}
        </div>
      </div>
    </DescriptionWrapper>
  </ProjectRightSection>
);

const ProjectLeft = ({ project, color }) => {
  return (
    <ProjectLeftSection color={color}>
      <ProjectHeader>
        <div className="project-title">{project.projectName}</div>
        <div className="project-link">{project.projectLink}</div>
      </ProjectHeader>
      <div className="project-summary">{project.projectDesc}</div>
      <div className="project-detail">{project.projectFullDesc}</div>
      {project.pns.length > 0 ? (
        <ProjectPNS pns={project.pns} color={color} />
      ) : (
        ""
      )}
      <div className="roles">
        <div className="title">Part</div>
        <div className="roles-wrapper">
          {project.roles.map((role, index) => (
            <div key={index}>{role}</div>
          ))}
        </div>
      </div>
    </ProjectLeftSection>
  );
};

const ProjectPNS = ({ pns, color }) => {
  //console.log(pns);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex === pns.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <PNSWrapper color={color}>
      <div className="problem-solution">
        <section>
          <div className="title">문제점</div>
          <div>{pns[currentIndex].problem}</div>
        </section>
        <section>
          <div className="title">해결</div>
          <div>{pns[currentIndex].solution}</div>
        </section>
      </div>
      <div className="btn" onClick={handleNext}>
        {">"}
      </div>
    </PNSWrapper>
  );
};

const Color = {
  Lime: {
    mainColor: "#00FFA3",
    subColor: "black",
  },
};

const SimpleProject = ({ color = "Lime" }) => {
  const { projectId } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const data = await GetProject(projectId);
        setProject(data);
      } catch (error) {
        console.error("Error fetching project data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProject();
  }, [projectId]);

  const selectedColor = Color[color];
  console.log(project);
  if (loading) {
    return <div>Loading...</div>;
  }

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <>
      <PortfolioButton />
      <Wrapper>
        <Content color={selectedColor}>
          <div className="content-label">Contents</div>
          <MainContainer color={selectedColor}>
            <ProjectLeft project={project} color={selectedColor} />
            <ProjectRight project={project} color={selectedColor} />
          </MainContainer>
        </Content>
      </Wrapper>
    </>
  );
};

export default SimpleProject;
