import React, { useState } from "react";

import { Img, Input } from "./UserInfo.styles";
import Button from "../../Button/Button";

import User from "../../../interface/user/user";

// 사용자 프로필 정보 가져오기
// const getUserProfile = async (userId: string) => {
//   try {
//     return await instance.get(`api/auth/${userId}`);
//   } catch (error) {
//     console.error("사용자 정보를 불러오는 중 오류가 발생했습니다.", error);
//     throw error;
//   }
// };

// 사용자 프로필 정보 저장
// const saveUserProfile = async (userId: string, userInfo: User) => {
//   try {
//     return await instance.put(`api/auth/${userId}`, userInfo);
//   } catch (error) {
//     if (error.response?.status === 401) {
//       alert("아이디 또는 비밀번호가 잘못되었습니다.");
//     } else if (error.response?.status === 500) {
//       alert("회원가입을 하셔야해.");
//     } else {
//       alert("잠시 후 다시 시도해주세요.");
//     }
//     throw error;
//   }
// };

export default function UserInfo() {
  const [user, setUser] = useState<User>({
    name: "",
    nickname: "",
    password: "",
    profilePic: "string",
  });
  const [loading, setLoading] = useState(true);
  const userId = sessionStorage.getItem("userId");

  // 사용자 정보 저장 버튼 핸들러
  const handleSaveBtn = async () => {
    // try {
    //   if (!userId) {
    //     alert("사용자 ID가 존재하지 않습니다.");
    //     return;
    //   }
    //   console.log("user", user);
    //   await saveUserProfile(userId, user);
    //   alert("저장이 완료되었습니다.");
    // } catch (error) {
    //   alert("저장 중 오류가 발생했습니다.");
    // }
  };

  return (
    <>
      <Img></Img>
      <Input>
        <label>이름</label>
        <input
          value={user.name}
          placeholder={user.name || "Name"}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
      </Input>
      <Input>
        <label>닉네임</label>
        <input
          value={user.nickname}
          placeholder={user.nickname || "Nickname"}
          onChange={(e) => setUser({ ...user, nickname: e.target.value })}
        />
      </Input>
      <Input>
        <label>비밀번호</label>
        <input
          type="password"
          value={user.password}
          placeholder="********"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
      </Input>
      <Button
        width="110px"
        height="50px"
        onClick={handleSaveBtn}
        children="저장"
        size="s"
      />
      <p
        style={{
          cursor: "pointer",
        }}
      >
        회원탈퇴
      </p>
    </>
  );
}
