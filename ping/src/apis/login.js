import instance from "./instance";

const Login = (email, password) => {
  const datas = JSON.stringify({
    email,
    password,
  });
  console.log(instance.defaults.baseURL + "api/auth/login");

  const promise = new Promise((resolve, reject) => {
    instance
      .post("api/auth/login", datas, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        sessionStorage.setItem("userId", response.data.userId); // 세션에 사용자 ID 저장
        console.log("사용자 정보 저장 성공: ", sessionStorage.getItem("userId"));
        console.log("성공: ", response.data);
        resolve(response);
      })
      .catch((error) => {
        if (error.response.status === 401) {
          alert("아이디 또는 비밀번호가 잘못되었습니다.");
        } else if (error.response.status === 500) {
          alert("서버 내부가 잘못되었습니다.");
        } else {
          alert("잠시 후 다시 시도해주세요.");
        }
        reject(error);
      });
  });
  return promise;
};

export default Login;
