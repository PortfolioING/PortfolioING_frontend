import React, { useState, useEffect } from "react";
import {
  Wrapper,
  LeftWrapper,
  RightWrapper,
  Header,
  ProjectWrapper,
  CustomOh,
  CustomHello,
  ProjectContainer,
} from "./Creative.styles";
import { useNavigate } from "react-router-dom";

import Ping from "../../asset/ping";
import Face from "../../asset/face.svg";
import GetPortfolio from "../../apis/GetPortfolio";

const Color = {
  blue: {
    mainColor: "#0075FF",
    subColor: "#A1CCFF",
    subColor_2: "#D9D9D9",
    subColor_3: "#005BC7",
    subColor_4: "#848484",
  },
};
const Project = ({ project, color, ...props }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/template/2/project/${project.projectId}`);
  };
  const projectName = project.projectName || "프로젝트 이름 없음";
  const projectDesc = project.projectDesc || "설명이 없습니다.";
  const roles = project.roles || []; // 기본값을 빈 배열로 설정

  return (
    <ProjectContainer color={color} onClick={handleClick}>
      <div className="number">{project.number}</div>
      <div className="title">{projectName}</div>
      <div className="desc">{projectDesc}</div>
      <div className="roles">
        {roles.map((role) => (
          <p>#{role}</p>
        ))}
      </div>
    </ProjectContainer>
  );
};

const Creative = ({ color = "blue" }) => {
  const [portfolioInfo, setPortfolioInfo] = useState(null); // 상태 관리
  const selectedColor = Color[color];

  useEffect(() => {
    const fetchPortfolio = async () => {
      const portfolioId = sessionStorage.getItem("portfolioId"); // 세션에서 ID 가져오기
      if (!portfolioId) {
        console.error("포트폴리오 ID가 없습니다.");
        return;
      }

      try {
        const result = await GetPortfolio(portfolioId); // 비동기 호출
        setPortfolioInfo(result); // 상태에 저장
      } catch (error) {
        console.error("설문 데이터를 가져오는 중 오류 발생:", error);
      }
    };

    fetchPortfolio();
  }, []);

  if (!portfolioInfo) {
    return <div>데이터를 불러오는 중...</div>;
  }
  console.log(portfolioInfo);
  const { title } = portfolioInfo;
  const {
    introduce,
    name,
    image,
    projects = [],
  } = portfolioInfo.surveyDto || {};

  return (
    <Wrapper color={selectedColor}>
      <img className="face" src={Face} />
      <CustomOh fill={selectedColor.mainColor} />
      <CustomHello
        subColor1={selectedColor.subColor}
        subColor2={selectedColor.subColor_3}
      />
      <LeftWrapper>
        <Header>
          <div className="introduce">{introduce}</div>
          <div className="name">
            안녕하세요?
            <br />
            {name}입니다.
          </div>
        </Header>
        <ProjectWrapper>
          {projects.map((project, index) => (
            <Project
              key={project.number}
              color={selectedColor}
              project={{ ...project, number: index + 1 }}
            />
          ))}
        </ProjectWrapper>
      </LeftWrapper>
      <RightWrapper>
        <div className="user-img">{image == "" ? "" : <img src={image} />}</div>
      </RightWrapper>
    </Wrapper>
  );
};

export default Creative;
