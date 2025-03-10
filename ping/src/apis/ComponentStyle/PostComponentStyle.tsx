import instance from "../instance";
import { createErrorResponse } from "../../interface/api/Message";
const PostComponentStyle = async (
  bold: boolean,
  italic: boolean,
  underscore: boolean,
  strikethrough: boolean,
  size: number,
  text_color: string,
  background_color: string
) => {
  const datas = {
    bold,
    italic,
    underscore,
    strikethrough,
    size,
    text_color,
    background_color,
  };

  try {
    return await instance.post("api/components_styles", datas);
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

export default PostComponentStyle;
