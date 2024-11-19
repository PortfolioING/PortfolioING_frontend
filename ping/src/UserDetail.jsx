import { useState, useEffect } from 'react';
import APICall from "./apis/instance";

import Login from "./apis/login";
export default function UserDetail({ userId }) {
  const handleSubmit = async (event) => {
    event.preventDefault();

    const email = "example@example.com";
    const password = "password123";

    Login(email, password).then((result) => {
      if (result) {
        console.log("로그인 성공");
      } else {
        console.log("로그인 실패");
      }
    });
  };

  useEffect(() => {
    if (userId) {
      APICall.get(`/api/auth/${userId}`)
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [userId]);

  return (
    <div>
      <button onClick={handleSubmit}>로그인 및 유저 상세 정보</button>
    </div>
  );
}
