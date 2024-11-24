import styled from "styled-components";

export const ProjectHeader = styled.div`
  color: white;
  display: flex;
  align-items: flex-end;
  gap: 20px;
  margin-bottom: 40px;
  .project-link {
    font-size: 25px;
    cursor: pointer;
  }
  .project-title {
    font-weight: 600;
    font-size: 70px;
  }
`;

export const ProjectLeftSection = styled.div`
  display: flex;
  flex-direction: column;
  color: white;

  .project-summary {
    color: ${(props) => props.color.mainColor || "default"};
    font-size: 30px;
    font-weight: 400;
    margin-bottom: 20px;
  }

  .project-detail {
    background-color: ${(props) => props.color.mainColor || "default"};
    color: black;
    width: 500px;
    height: 150px;
    padding: 20px;
    overflow-y: scroll;
    font-size: 18px;
    font-weight: 550;
    line-height: 1.6;
    border-radius: 20px;
    box-sizing: border-box;
  }
  .roles {
    display: flex;
    flex-direction: column;
    > .title {
      font-size: 35px;
      color: white;
      margin-bottom: 10px;
    }
    > .roles-wrapper {
      display: flex;
      gap: 10px;
      > div {
        padding: 10px 15px;
        border-radius: 20px;
        color: ${(props) => props.color.mainColor || "default"};
        border: 1px solid ${(props) => props.color.mainColor || "default"};
      }
    }
  }
`;

export const PNSWrapper = styled.div`
  margin-top: 25px;
  display: flex;
  width: 600px;
  height: 150px;

  box-sizing: border-box;
  .problem-solution {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-bottom: 20px;
    width: 500px;
    overflow: scroll;

    > section {
      display: flex;
      align-items: flex-start;
      gap: 15px;

      .title {
        text-align: center;
        width: 90px;
        flex: none;
        padding: 10px;
        border: 1px solid white;
        border-radius: 15px;
        box-sizing: border-box;
      }
    }
  }
  > .btn {
    display: flex;
    width: 100px;
    font-size: 70px;
    justify-content: center;

    text-align: center;
    cursor: pointer;
    color: ${(props) => props.color.mainColor || "default"};
  }
`;

export const ProjectRightSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;

  .project-image {
    width: 250px;
    height: 250px;
    border: 1px solid ${(props) => props.color.mainColor || "default"};
    border-radius: 50%;
    margin-bottom: 30px;
  }
`;

export const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  .description-item {
    display: flex;
    align-items: center;
    color: white;
    height: 40px;
    font-size: 18px;
    font-weight: 400;

    .item-title {
      font-size: 23px;
      margin-right: 20px;
    }
  }
`;
