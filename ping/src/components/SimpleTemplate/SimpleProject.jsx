import React from "react";
import { Wrapper, Content } from "./Simple.styles";
import {
  RightWrapper,
  DescWrapper,
  CategoryWrapper,
  LeftWrapper,
} from "./SimpleProject.styles";

const Left = () => {
  return (
    <LeftWrapper>
      <div className="img"></div>
      <DescWrapper>
        <div className="project-desc">
          <div className="desc-title">Date</div>
          <div>2023.10.08 ~ 2024.01.01 </div>
        </div>
        <div className="project-desc">
          <div className="desc-title">Tool</div>
          <div>figma React Spring</div>
        </div>
        <div className="project-desc">
          <div className="desc-title">Link</div>
          <div style={{ cursor: "pointer" }}>
            https://github.com/PortfolioING
          </div>
        </div>
      </DescWrapper>
      <CategoryWrapper>
        <div>프론트</div>
        <div>기획</div>
        <div>UX/UI</div>
      </CategoryWrapper>
    </LeftWrapper>
  );
};
const Right = () => {
  return (
    <RightWrapper>
      <div className="title">Project title</div>
      <div className="project-intro">
        산협프 2에서 만든 웹 포토폴리오를 만들어주는 웹사이트
      </div>
      <div className="project-desc">
        산협프 2에서 만든 웹 포토폴리오를 만들어주는 웹사이트. 산협프 2에서 만든
        웹 포토폴리오를 만들어주는 웹사이트 산협프 2에서 만든 웹 포토폴리오를
        만들어주는 웹사이트 산협프 2에서 만든 웹 포토폴리오를 만들어주는
        웹사이트 산협프 2에서 만든 웹 포토폴리오를 만들어주는 웹사이트 산협프
        2에서 만든 웹 포토폴리오를 만들어주는 웹사이트 산협프 2에서 만든 웹
        포토폴리오를 만들어주는 웹사이트 산협프 2에서 만든 웹 포토폴리오를
        만들어주는 웹사이트 산협프 2에서 만든 웹 포토폴리오를 만들어주는
        웹사이트. 산협프 2에서 만든 웹 포토폴리오를 만들어주는 웹사이트 산협프
        2에서 만든 웹 포토폴리오를 만들어주는 웹사이트 산협프 2에서 만든 웹
        포토폴리오를 만들어주는 웹사이트 산협프 2에서 만든 웹 포토폴리오를
        만들어주는 웹사이트 산협프 2에서 만든 웹 포토폴리오를 만들어주는
        웹사이트 산협프 2에서 만든 웹 포토폴리오를 만들어주는 웹사이트 산협프
        2에서 만든 웹 포토폴리오를 만들어주는 웹사이트산협프 2에서 만든 웹
        포토폴리오를 만들어주는 웹사이트. 산협프 2에서 만든 웹 포토폴리오를
        만들어주는 웹사이트 산협프 2에서 만든 웹 포토폴리오를 만들어주는
        웹사이트 산협프 2에서 만든 웹 포토폴리오를 만들어주는 웹사이트 산협프
        2에서 만든 웹 포토폴리오를 만들어주는 웹사이트 산협프 2에서 만든 웹
        포토폴리오를 만들어주는 웹사이트 산협프 2에서 만든 웹 포토폴리오를
        만들어주는 웹사이트 산협프 2에서 만든 웹 포토폴리오를 만들어주는
        웹사이트
      </div>
    </RightWrapper>
  );
};
const SimpleProject = () => {
  return (
    <Wrapper>
      <Content>
        <div className="content-label">Contents</div>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <Left></Left>
          <Right></Right>
        </div>
      </Content>
    </Wrapper>
  );
};

export default SimpleProject;
