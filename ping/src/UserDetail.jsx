import { useState, useEffect } from 'react';
import APICall from "./apis/instance";

export default function UserDetail({ userId }) {

  const [user, setUser] = useState('');

  useEffect(() => {
    APICall.get(`/api/auth/${userId}`) // '/api'로 시작하여 프록시가 동작하도록 설정
      .then((response) => {
        setUser(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [userId]);

  return <div key={user.userId}>
          <h2>유저 상세 정보</h2>
          <p><strong>유저 이름: </strong>{user.name}</p>
          <p><strong>이메일: </strong>{user.email}</p>
          <p><strong>닉네임: </strong>{user.nickname}</p>
          <p><strong>프사 url: </strong>{user.profilePic}</p>
  </div>;
}
