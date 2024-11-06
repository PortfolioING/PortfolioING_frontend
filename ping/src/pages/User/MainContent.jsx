import { MainContentWrapper } from "./MainContent.styles";
import UserProfileEditor from "./MainContent/UserProfileEidtor";
import WorkSpace from "./MainContent/WorkSpace";
import PaymentAdmin from "./MainContent/PaymentAdmin/PaymentAdmin";

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
