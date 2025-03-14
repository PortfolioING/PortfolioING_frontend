import instance from "../instance";
import { createErrorResponse } from "../../interface/api/Message";
const GetComponent = async (component_id: number) => {
  try {
    return await instance.get(`api/components/component_id=${component_id}`);
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

export default GetComponent;
