import React from "react";
import { Wrapper, Content, MainContent, ProjectWrapper } from "./Simple.styles";
import { useNavigate } from "react-router-dom";
const Simple = () => {
  return (
    <Wrapper>
      <Content>
        <div className="label">Portfolio-ING</div>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <MainContent>
            <div className="title">Portfolio title</div>
            <section className="introduce-div">
              <p className="content-title">Introduce me</p>
              <div className="introduce-desc">개쩌는 프론트개발자</div>
            </section>
            <section>
              <p className="content-title">Contents</p>
              <div>
                <Projectdiv />
                <Projectdiv />
                <Projectdiv />
                <Projectdiv />
                <Projectdiv />
              </div>
            </section>
          </MainContent>
          <div className="left">
            <div className="img"></div>
            <div>NAME</div>
          </div>
        </div>
      </Content>
    </Wrapper>
  );
};
const Projectdiv = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/templates1-project");
  };
  return (
    <ProjectWrapper onClick={handleClick}>
      <div>01</div>
      <div className="desc">
        <p className="title">Project-title</p>
        <p>Project-desc</p>
      </div>
      <div className="category-wrap">
        <div>카테고리</div>
        <div>카테고리</div>
      </div>
    </ProjectWrapper>
  );
};

export default Simple;
