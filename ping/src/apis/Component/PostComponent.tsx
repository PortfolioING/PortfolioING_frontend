import instance from "../instance";
import { createErrorResponse } from "../../interface/api/Message";
const PostComponent = async (
  portfolio_id: number,
  tag: string,
  parent_component_id: number | null,
  component_style_id: number
) => {
  const datas = { portfolio_id, tag, parent_component_id, component_style_id };

  try {
    return await instance.post("api/components", datas);
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

export default PostComponent;
