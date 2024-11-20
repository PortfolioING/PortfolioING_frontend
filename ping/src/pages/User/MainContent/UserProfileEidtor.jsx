import FormField from "../../../components/Form/FormField";
import Button from "../../../components/Button/Button";
import styled from "styled-components";
import FileUpdate from "../../../components/FileUpdate/FileUpdate";
import Ping from "../../../asset/ping.jsx";
const UserProfileWrapper = styled.div`
  padding-left: 40px;
  width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > * {
    margin-bottom: 20px;
  }
`;

const UserProfileEditor = () => {
  const handleSaveBtn = () => {
    alert("저장이 완료되었습니다.");
  };
  return (
    <UserProfileWrapper>
      <FileUpdate defaultImg={Ping} />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <FormField label="Name" width="400px" height="50px" />
        <FormField label="NickName" width="400px" height="50px" />
        <FormField label="Password" width="400px" height="50px" />
        {/* 이 주석 지우지 마세요 - ㄱㄷㅎ  
        <FormField label="Job" width="400px" height="50px" />
         
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <FormField label="Phone" width="270x" height="50px" />
          <Button
            style={{ marginLeft: "12px" }}
            isDisabled={true}
            btnfontSize="16px"
            children="인증하기"
            btnbordercolor="#C5C5C5"
            btnfontcolor="#C5C5C5"
            btnwidth="132px"
            btnheight="50px"
            btnbackgroundcolor="white"
          /> 
        </div>*/}
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Button
          onClick={handleSaveBtn}
          btnfontSize="16px"
          children="저장"
          btnbordercolor="#FFFFFF"
          btnfontcolor="#FFFFFF"
          btnwidth="132px"
          btnheight="50px"
          btnbackgroundcolor="#000000"
        />
        <p
          style={{
            marginTop: "15px",
            cursor: "pointer",
          }}
        >
          회원탈퇴
        </p>
      </div>
    </UserProfileWrapper>
  );
};

export default UserProfileEditor;
