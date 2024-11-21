import instance from "./instance";
// ProjectController Request body
// {
//     "project_name": "string",
//     "image": "string",
//     "short_intro": "string",
//     "long_intro": "string",
//     "date": "2024-11-21T13:38:35.048Z",
//     "target": "string",
//     "role": "string",
//     "problem": "string",
//     "solution": "string",
//     "feedback": "string"
// }
const PostProject = async (projects) => {
    const projectData = projects.map(project => ({
      project_name: project.projectName,
      image: project.projectPhoto, // 이미지 URL로 변환 필요
      short_intro: project.projectDescLine,
      long_intro: project.projectDesc,
      date: project.projectDate, // 날짜 데이터가 필요
      target: "", // 필요에 따라 추가
      role: "", // 필요에 따라 추가
      problem: "", // 필요에 따라 추가
      solution: "", // 필요에 따라 추가
      feedback: "" // 필요에 따라 추가
    }));
  
    try {
        // 각 프로젝트에 대해 POST 요청을 수행
        const responses = await Promise.all(
          projectData.map(data => instance.post("api/projects", data))
        );
        
        // 각 요청의 응답에서 project ID를 추출
        const projectIds = responses.map(response => response.data.id); // ID는 서버에서 반환하는 형식에 따라 조정 필요
        return projectIds;
      } catch (error) {
        if (error.response) {
          if (error.response.status === 401) {
            alert("잘못된 요청입니다.");
          } else if (error.response.status === 500) {
            alert("Project를 생성할 수 없습니다.");
          } else {
            alert("잠시 후 다시 시도해주세요.");
          }
        }
        throw error; // catch에서 reject를 사용하지 않고 throw로 수정
      }
    };

export default PostProject;
