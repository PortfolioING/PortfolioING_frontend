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
//------ API 엔드포인트 수정해야 함. ------

const UserProfileEditor = () => {
  // 상태 관리
  const [userInfo, setUserInfo] = useState({
    name: "",
    nickname: "",
    password: "",
  });

  const [loading, setLoading] = useState(true); // 로딩 상태 관리

  // API 요청
  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await axios.get("/api/user/profile"); // userId를 식별자로 주도록 API 엔드포인트 변경 필요
        setUserInfo(response.data); // 가져온 데이터를 상태에 저장
        setLoading(false); // 로딩 완료
      } catch (error) {
        console.error("사용자 정보를 불러오는 중 오류가 발생했습니다.", error);
      }
    };
    fetchUserInfo();
  }, []);

  // 저장 버튼 클릭 핸들러
  const handleSaveBtn = async () => {
    try {
      // PUT 요청으로 수정된 사용자 정보 전송
      await axios.put("/api/user/profile", userInfo); // API 엔드포인트 변경 필요
      alert("저장이 완료되었습니다.");
    } catch (error) {
      console.error("저장 중 오류가 발생했습니다.", error);
      alert("저장 중 오류가 발생했습니다.");
    }
  };

  // 로딩 상태 처리
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <UserProfileWrapper>
      <FileUpdate defaultImg={<Ping width="140" height="140" />} />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <FormField
          label="Name"
          width="400px"
          height="50px"
          value={userInfo.name}
          onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })} // 입력값 업데이트
        />
        <FormField
          label="NickName"
          width="400px"
          height="50px"
          value={userInfo.nickname} // 닉네임 표시
          onChange={
            (e) => setUserInfo({ ...userInfo, nickname: e.target.value }) // 입력값 업데이트
          }
        />
        <FormField
          label="Password"
          width="400px"
          height="50px"
          type="password"
          value={userInfo.password} // 비밀번호 표시
          onChange={
            (e) => setUserInfo({ ...userInfo, password: e.target.value }) // 입력값 업데이트
          }
        />
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
          children="저장"
          mainColor="BlackWhite"
          size="sm"
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
