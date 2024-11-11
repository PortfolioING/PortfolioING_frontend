import MenuBar from "../../components/MenuBar/MenuBar";
import { Wrapper, LeftWrapper, Title, Nav } from "./User.styles";
import MainContent from "./MainContent";

import { useState } from "react";

const LeftSideBar = ({ handleClick, activeId }) => {
  return (
    <LeftWrapper>
      <Title>My Page</Title>
      <Nav>
        <ul>
          <li
            id="1"
            className={activeId === "1" ? "active" : ""}
            onClick={handleClick}
          >
            개인정보
          </li>
          <li
            id="2"
            className={activeId === "2" ? "active" : ""}
            onClick={handleClick}
          >
            결제관리
          </li>
          <li
            id="3"
            className={activeId === "3" ? "active" : ""}
            onClick={handleClick}
          >
            워크스페이스
          </li>
        </ul>
      </Nav>
    </LeftWrapper>
  );
};

export default function User() {
  const [userClick, setUSerClick] = useState("1");
  const handleClick = (e) => {
    setUSerClick(e.target.id);
  };
  return (
    <>
      <MenuBar />
      <Wrapper>
        <LeftSideBar handleClick={handleClick} activeId={userClick} />
        <MainContent menu={userClick} />
      </Wrapper>
    </>
  );
}
