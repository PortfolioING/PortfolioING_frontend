import React, { useState } from "react";
import MenuBar from "../../components/MenuBar/MenuBar";
import { Wrapper, LeftWrapper, Title, Nav } from "./AboutPing.styles";
import AboutPingContent from "./AboutPingContent";

const LeftSideBar = ({ handleClick, activeId }) => {
  return (
    <LeftWrapper>
      <Title>About Ping</Title>
      <Nav>
        <ul>
          <li
            id="1"
            className={activeId === "1" ? "active" : ""}
            onClick={handleClick}
          >
            기능 소개
          </li>
          <li
            id="2"
            className={activeId === "2" ? "active" : ""}
            onClick={handleClick}
          >
            팀원 소개
          </li>
        </ul>
      </Nav>
    </LeftWrapper>
  );
};

const AboutPing = () => {
  const [activeId, setActiveId] = useState("1");

  const handleClick = (e) => {
    const selectedId = e.target.id;
    setActiveId(selectedId);
  };

  return (
    <>
      <MenuBar />
      <Wrapper>
        <LeftSideBar handleClick={handleClick} activeId={activeId} />
        <AboutPingContent menu={activeId} />
      </Wrapper>
    </>
  );
};

export default AboutPing;
