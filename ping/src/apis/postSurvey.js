import instance from "./instance";

const PostSurvey = async (surveyData, projectIds) => {
    const requestData = {
      name: surveyData.name,
      introduce: surveyData.introduction,
    //   profile: surveyData.photo, // 이미지 URL로 변환 필요
      profile: "photo",
      projectsId: projectIds
    };

    console.log("Survey POST request body", requestData);
  try {

    const response = await instance.post("api/survey", requestData);
    return response.data;

  } catch (error) {
    if (error.response) {
      if (error.response.status === 401) {
        alert("잘못된 요청입니다.");
      } else if (error.response.status === 500) {
        alert("Survey를 생성할 수 없습니다.");
      } else {
        alert("잠시 후 다시 시도해주세요.");
      }
    }
    throw error;
  }
};

export default PostSurvey;
