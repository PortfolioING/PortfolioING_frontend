import MenuBar from "../../components/MenuBar/MenuBar";
import { Wrapper, LeftWrapper, Title, Nav } from "./User.styles";
import MainContent from "./MainContent";

import { useState } from "react";

const LeftSideBar = ({ handleClick }) => {
  return (
    <LeftWrapper>
      <Title>My Page</Title>
      <Nav>
        <ul>
          <li id="1" onClick={handleClick}>
            개인정보
          </li>
          <li id="2" onClick={handleClick}>
            결제관리
          </li>
          <li id="3" onClick={handleClick}>
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
        <LeftSideBar handleClick={handleClick} />
        <MainContent menu={userClick} />
      </Wrapper>
    </>
  );
}
