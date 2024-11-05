import { MainContentWrapper } from "./MainContent.styles";
import UserProfileEditor from "./UserProfileEidtor";
import WorkSpace from "./WorkSpace";
import PaymentAdmin from "./PaymentAdmin";

const MainContent = ({ menu }) => {
  return (
    <MainContentWrapper>
      {menu === "1" ? <UserProfileEditor /> : null}
      {menu === "2" ? <PaymentAdmin /> : null}
      {menu === "3" ? <WorkSpace /> : null}
    </MainContentWrapper>
  );
};
export default MainContent;
