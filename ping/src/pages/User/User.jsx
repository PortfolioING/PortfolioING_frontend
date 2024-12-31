import { useState } from "react";
import { useSearchParams } from "react-router-dom";

import { SideBar } from "../../components/User/SideBar/SideBar";
import MenuBar from "../../components/MenuBar/MenuBar";
import UserProfileEditor from "./Section/UserProfileEidtor";
import WorkSpace from "./Section/WorkSpace";
import PaymentAdmin from "./Section/PaymentAdmin";

import { MainContent, UserWrapper } from "./User.styles";

export default function User() {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const [userClick, setUserClick] = useState(id || "1");

  const handleClick = (e) => {
    const selectedId = e.target.id;
    setUserClick(selectedId);
  };

  return (
    <>
      <MenuBar />
      <UserWrapper>
        <SideBar handleClick={handleClick} activeId={userClick} />
        <MainContent>
          {userClick === "1" && <UserProfileEditor />}
          {userClick === "2" && <PaymentAdmin />}
          {userClick === "3" && <WorkSpace />}
        </MainContent>
      </UserWrapper>
    </>
  );
}
