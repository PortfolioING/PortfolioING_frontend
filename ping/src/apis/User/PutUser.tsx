import instance from "../instance";
import { createErrorResponse } from "../../interface/api/Message";
const PutUser = async (
  user_id: number,
  name: string,
  email: string,
  password: string,
  nickname: string,
  profile_pic: number
) => {
  const datas = { name, email, password, nickname, profile_pic };

  try {
    return await instance.put(`api/users/${user_id}`, datas);
  } catch (error) {
    if (error.response) {
      const errorData = createErrorResponse(error.response.status.toString());

      alert(errorData.errorContent.message);
    } else {
      alert("네트워크 오류가 발생했습니다. 다시 시도해주세요.");
    }

    throw error;
  }
};

export default PutUser;
