import styled from "styled-components";

export const PortfolioContent = styled.div`
  display: flex;
  flex-direction: column;

  .portfolio-title {
    display: flex;
    gap: 20px;
    font-size: 70px;
    font-weight: 400;
    color: white;
    margin-bottom: 20px;
  }

  .section-title {
    font-size: 25px;
    font-weight: 400;
    color: ${(props) => props.color.mainColor || "default"};
    margin-bottom: 10px;
  }

  .introduce-section {
    margin-bottom: 20px;

    .introduce-content {
      background-color: ${(props) => props.color.mainColor || "default"};
      display: flex;
      justify-content: center;
      align-items: center;
      width: 450px;
      height: 100px;
      border-radius: 30px;
      padding: 18px;
      font-size: 32px;
      font-weight: 600;
      color: black;
      box-sizing: border-box;
      overflow-y: scroll;
    }
  }

  .project-section {
    .project-list {
      height: 300px;
      display: flex;
      flex-direction: column;
      overflow: scroll;
    }
  }
`;

export const ProjectCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 500px;
  padding: 15px 10px;
  box-sizing: border-box;
  color: white;
  border-bottom: 1px solid ${(props) => props.color.mainColor || "default"};
  border-top: 1px solid ${(props) => props.color.mainColor || "default"};

  .project-number {
    font-size: 20px;
    color: ${(props) => props.color.mainColor || "default"};
  }

  .project-description {
    display: block;
    width: 160px;
    flex-shrink: 0;
    font-size: 15px;
    color: white;
    .project-title {
      font-size: 20px;
      font-weight: bold;
      margin-bottom: 10px;
    }
    > p {
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
  }

  .project-roles {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 5px;

    .role {
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid ${(props) => props.color.mainColor || "default"};
      padding: 5px 10px;
      border-radius: 10px;
      font-size: 12px;
      color: ${(props) => props.color.mainColor || "default"};
    }
  }
`;

export const ImgWrapper = styled.div`
  margin-left: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.color.mainColor || "default"};

  .profile-image {
    border: 1px solid ${(props) => props.color.mainColor || "default"};
    width: 350px;
    height: 350px;
    border-radius: 50%;
    margin-bottom: 30px;
  }

  .profile-name {
    font-size: 18px;
    font-weight: bold;
  }
`;
