import FormField from "../../../components/Form/FormField";
import Button from "../../../components/Button/Button";
import styled from "styled-components";

const UserProfileWrapper = styled.div`
  padding-left: 40px;
  width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  > * {
    margin-bottom: 20px;
  }
`;
const UserProfileImg = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  > img {
    border-radius: 50%;
  }
`;
const UserProfileEditor = () => {
  return (
    <UserProfileWrapper>
      <UserProfileImg>
        <img src="http://via.placeholder.com/150x150" alt="user-photo" />
      </UserProfileImg>
      <div>
        <FormField label="NickName" width="400px" height="50px" />
        <FormField label="Job" width="400px" height="50px" />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <FormField label="Phone" width="254x" height="50px" />
          <Button
            childern="인증하기"
            btnbordercolor="#C5C5C5"
            btnfontcolor="#C5C5C5"
            btnwidth="132px"
            btnheight="50px"
            btnbackgroundcolor="white"
          />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <Button
          childern="저장"
          ntbordercolor="#FFFFFF"
          btnfontcolor="#FFFFFF"
          btnwidth="132px"
          btnheight="50px"
          btnbackgroundcolor="#000000"
        />
        <p
          style={{
            marginTop: "10px",
          }}
        >
          회원탈퇴
        </p>
      </div>
    </UserProfileWrapper>
  );
};

export default UserProfileEditor;
