import { useEffect } from "react";
import APICall from "./apis/instance";

export default function UserDetail({ userId }) {
  useEffect(() => {
    APICall.get(`/api/auth/${userId}`) // '/api'로 시작하여 프록시가 동작하도록 설정
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [userId]);

  return <div>유저 상세 정보</div>;
}
