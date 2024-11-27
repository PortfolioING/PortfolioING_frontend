import React, { useState, useEffect } from "react";
import FormField from "../../../components/Form/FormField";
import Button from "../../../components/Button/Button";
import styled from "styled-components";
import FileUpdate from "../../../components/FileUpdate/FileUpdate";
import Ping from "../../../asset/ping.jsx";
import instance from "../../../apis/instance/index.js";

// 사용자 프로필 정보 가져오기
const getUserProfile = async (userId) => {
  try {
    return await instance.get(`api/auth/${userId}`);
  } catch (error) {
    console.error("사용자 정보를 불러오는 중 오류가 발생했습니다.", error);
    throw error;
  }
};

// 사용자 프로필 정보 저장
const saveUserProfile = async (userId, userInfo) => {
  try {
    return await instance.put(`api/auth/${userId}`, userInfo);
  } catch (error) {
    if (error.response?.status === 401) {
      alert("아이디 또는 비밀번호가 잘못되었습니다.");
    } else if (error.response?.status === 500) {
      alert("회원가입을 하셔야해.");
    } else {
      alert("잠시 후 다시 시도해주세요.");
    }
    throw error;
  }
};

// 스타일 정의
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
  const [userInfo, setUserInfo] = useState({
    name: "",
    nickname: "",
    password: "",
    profilePic: "string",
  });
  const [loading, setLoading] = useState(true);
  const userId = sessionStorage.getItem("userId");

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        if (!userId) {
          throw new Error("사용자 ID가 존재하지 않습니다.");
        }
        const response = await getUserProfile(userId);
        setUserInfo(response.data);
        setLoading(false);
      } catch (error) {
        alert("사용자 정보를 불러오는 데 실패했습니다.");
        setLoading(false);
      }
    };
    fetchUserInfo();
  }, [userId]);

  const handleSaveBtn = async () => {
    try {
      if (!userId) {
        alert("사용자 ID가 존재하지 않습니다.");
        return;
      }
      console.log("userInfo", userInfo);
      await saveUserProfile(userId, userInfo);
      alert("저장이 완료되었습니다.");
    } catch (error) {
      alert("저장 중 오류가 발생했습니다.");
    }
  };

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
          placeholder={userInfo.name || "Name"}
          onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })}
        />
        <FormField
          label="NickName"
          width="400px"
          height="50px"
          value={userInfo.nickname}
          placeholder={userInfo.nickname || "NickName"}
          onChange={(e) =>
            setUserInfo({ ...userInfo, nickname: e.target.value })
          }
        />
        <FormField
          label="Password"
          width="400px"
          height="50px"
          type="password"
          value={userInfo.password}
          placeholder="********" // 보안상 비밀번호는 보여주지 않고 기본 텍스트로 대체
          onChange={(e) =>
            setUserInfo({ ...userInfo, password: e.target.value })
          }
        />
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
