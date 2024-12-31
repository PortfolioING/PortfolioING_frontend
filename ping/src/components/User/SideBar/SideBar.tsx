import React from "react";
import { Wrapper, Title, Nav } from "./SideBar.style";

interface SideBarProps {
  handleClick: (event: React.MouseEvent<HTMLLIElement>) => void;
  activeId: string;
}

export const SideBar: React.FC<SideBarProps> = ({ handleClick, activeId }) => {
  return (
    <Wrapper>
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
    </Wrapper>
  );
};
