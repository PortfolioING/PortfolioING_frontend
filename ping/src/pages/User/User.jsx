import MenuBar from "../../components/MenuBar/MenuBar";
import { Wrapper, LeftWrapper, Title, Nav } from "./User.styles";
import MainContent from "./MainContent";

import { useState } from "react";
import { useSearchParams } from "react-router-dom";

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
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");

  const [userClick, setUSerClick] = useState(id || "1");

  const handleClick = (e) => {
    const selectedId = e.target.id;
    setUSerClick(selectedId);
    navigate(`/user/${selectedId}`); // URL을 업데이트
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
