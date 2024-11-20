import { useState, useEffect } from 'react';
import APICall from "./apis/instance";

import Login from "./apis/login";
export default function UserDetail({ userId }) {
  const handleSubmit = async (event) => {
    event.preventDefault();

    const email = "seanlancekim0@gmail.com";
    const password = "tksguqvld";

    Login(email, password).then((result) => {
      console.log(result);
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
