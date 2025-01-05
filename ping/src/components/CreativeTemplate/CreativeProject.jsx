import React, { useEffect, useState } from "react";
import {
  Wrapper,
  LeftWrapper,
  RightWrapper,
  Header,
  PSWrapper,
} from "./CreativeProject.styles";
import ProjectImg from "../../asset/project";
import { useParams } from "react-router-dom";
import GetProject from "../../apis/getProject";
import PortfolioButton from "../PortfolioButton/PortfolioButton";

const ProblemSolution = ({ problem, solution, color }) => {
  return (
    <PSWrapper color={color}>
      <div className="section">
        <div className="title">문제점</div>
        <div>{problem}</div>
      </div>
      <div className="section">
        <div className="title">해결</div>
        <div>{solution}</div>
      </div>
    </PSWrapper>
  );
};
const Color = {
  Blue: {
    mainColor: "#0075FF",
    subColor: "#A1CCFF",
    subColor_3: "#005BC7",
  },
};
const CreativeProject = ({ color = "Blue", ...props }) => {
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
        <ProjectImg
          mainColor={selectedColor.mainColor}
          className="project-img"
        />
        <LeftWrapper>
          <Header color={selectedColor}>
            <div className="link">{project.projectLink}</div>
            <div className="title">{project.project_name}</div>
          </Header>
          <div className="image"></div>
          <div className="explanations">
            <div className="explanation">
              <p className="bold">역할</p>
              <p>|</p>
              <p>
                {project.roles.map((role, index) =>
                  index === project.roles.length - 1 ? role : role + ", "
                )}
              </p>
            </div>
            <div className="explanation">
              <p className="bold">기간</p>
              <p>|</p>
              <p>
                {project.startDate} ~ {project.endDate}
              </p>
            </div>
          </div>
        </LeftWrapper>
        <RightWrapper color={selectedColor}>
          <div className="desc">
            <div className="bold">{project.projectDesc}</div>
            <div>{project.projectFullDesc}</div>
          </div>

          <div className="ps-wrapper">
            {project.pns.map((ps, index) => (
              <ProblemSolution
                key={index}
                problem={ps.problem}
                solution={ps.solution}
                color={selectedColor}
              />
            ))}
          </div>
        </RightWrapper>
      </Wrapper>
    </>
  );
};

export default CreativeProject;
