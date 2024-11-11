import React from "react";
import { Wrapper, Content, MainContent, ProjectWrapper } from "./Simple.styles";
import { useNavigate } from "react-router-dom";
const Simple = ({ mainColor = "" }) => {
  const userIntro = {
    title: "Portfolio title",
    introduce: "개쩌는 프론트개발자",
    name: "Name",
    img: "",
    projects: [
      {
        number: "01",
        title: "Project Title",
        desc: "이거슨 프로젝트일까나..?몰라몰라몰라몰라몰라몰라몰라몰라",
        categories: ["프론트", "집갈래"],
      },
      {
        number: "02",
        title: "Project Title",
        desc: "이거슨 프로젝트일까나..?",
        categories: ["프론트", "집갈래", "자고싶다"],
      },
    ],
  };

  return (
    <Wrapper>
      <Content mainColor={mainColor}>
        <div className="label">Portfolio-ING</div>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <MainContent mainColor={mainColor}>
            <div className="title">{userIntro.title}</div>
            <section className="introduce-div">
              <p className="content-title">Introduce me</p>
              <div className="introduce-desc">{userIntro.introduce}</div>
            </section>
            <section>
              <p className="content-title">Contents</p>
              <div>
                {userIntro.projects.map((project) => (
                  <Projectdiv project={project} />
                ))}
              </div>
            </section>
          </MainContent>
          <div className="left">
            <div className="img">{userIntro.img}</div>
            <div>{userIntro.name}</div>
          </div>
        </div>
      </Content>
    </Wrapper>
  );
};
const Projectdiv = ({ project }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    //프로젝트의 number나 아이디를 통해 해당 프로젝트 받아와야함
    //받아오는 위치는 아래 url
    navigate("/templates1-project");
  };
  return (
    <ProjectWrapper onClick={handleClick}>
      <div>{project.number}</div>
      <div className="desc">
        <p className="title">{project.title}</p>
        <p>{project.desc}</p>
      </div>
      <div className="category-wrap">
        {project.categories.map((category) => (
          <div>{category}</div>
        ))}
      </div>
    </ProjectWrapper>
  );
};

export default Simple;
