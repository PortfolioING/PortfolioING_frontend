import instance from "./instance";

const PostProject = async (projects) => {
  const projectData = projects.map(project => {
    // projectDate에서 시작 및 종료 날짜를 안전하게 가져오기
    const startDate = project.projectDate && project.projectDate[0] instanceof Date 
      ? project.projectDate[0].toISOString()
      : "2024-10-08T00:00:00";

    const endDate = project.projectDate && project.projectDate[1] instanceof Date 
      ? project.projectDate[1].toISOString()
      : "2024-10-10T00:00:00";

    return {
      project_name: project.projectName,
      image: project.projectPhoto, // 이미지 URL로 변환 필요
      projectDesc: project.projectDescLine,
      projectFullDesc: project.projectDesc,
      projectLink: project.projectLink,
      startDate: startDate,
      endDate: endDate,
      roles: project.category,
      pns: project.problems.map(problem => ({
        problem: problem.problem,
        solution: problem.solution,
      })),
    };
  });

  //   const projectData = projects.map(project => ({
  //   projectName: project.projectName,
  //   image: project.projectPhoto, // 이미지 URL받아오기 추가 필요
  //   projectDesc: project.projectDescLine,
  //   projectFullDesc: project.projectDesc,
  //   projectLink: project.projectLink,
  //   startDate: project.projectDate[0].toISOString() || "2024-10-08T00:00:00",
  //   endDate: project.ProjectDate[1].toISOString() || "2024-10-08T00:00:00",
  //   roles: project.category, // 필요에 따라 추가
  //   pns: project.problems, // 필요에 따라 추가
  // }));
  
    console.log("post request body", projectData[0]);
    try {
        // 각 프로젝트에 대해 POST 요청을 수행
        const responses = await Promise.all(
          projectData.map(data => 
            instance.post("api/projects", data)
          )
        );
        
        // 각 요청의 응답에서 project ID를 추출
        const projectIds = responses.map(response => response.data.projectId); // ID는 서버에서 반환하는 형식에 따라 조정 필요
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
