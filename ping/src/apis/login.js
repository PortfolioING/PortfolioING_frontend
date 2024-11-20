import instance from "./instance";

const Login = (email, password) => {
  const datas = {
    email,
    password,
  };

  return instance.post("api/auth/login", datas).catch((error) => {
    if (error.response.status === 401) {
      alert("아이디 또는 비밀번호가 잘못되었습니다.");
    } else if (error.response.status === 500) {
      alert("서버 내부가 잘못되었습니다.");
    } else {
      alert("잠시 후 다시 시도해주세요.");
    }
    reject(error);
  });
};

export default Login;
