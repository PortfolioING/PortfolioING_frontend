import styled from "styled-components";

const FileLabel = styled.label`
  float: left;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 230px;
  height: 50px;

  border: 1px solid #c1c1c1;
  border-radius: 15px;
  color: #c1c1c1;
  font-size: 20px;
  font-weight: 600;
`;

const CategoryFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 550px;
  > .category-wrapper {
    margin-top: 20px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 5px;
  }
  .desc {
    display: flex;
    width: fit-content;
    border-radius: 0px 20px 20px 20px;
    border: 1px solid #c1c1c1;
    padding: 5px;
    color: #848484;
    font-size: 10px;
    box-sizing: border-box;
    .bold {
      color: red;
      font-weight: 600;
      margin: 0 10px;
    }
  }
`;

const Category = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 130px;
  height: 50px;
  border-radius: 50px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  color: ${(props) => (props.isActive ? "#fff" : "#707070")};
  background-color: ${(props) => (props.isActive ? "#00B3D7" : "#D7F8FF")};
  border: 2px solid ${(props) => (props.isActive ? "#007992" : "#D7F8FF")};
`;

const DateWrapper = styled.div`
  width: 550px;
  padding: 0 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-sizing: border-box;
  margin-bottom: 20px;
  > p {
    border-radius: 15px;
    width: 200px;
    padding: 7px;
    border: 1px solid #c1c1c1;
    font-size: 16px;
  }
`;

const ProblemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;
  border-bottom: 0.5px dotted #c1c1c1;
  > p {
    text-align: left;
    margin-top: 20px;
    margin-bottom: 10px;
  }
`;
const ProblemBtn = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 10px;
  gap: 5px;
  > img {
    width: 20px;
  }
  font-weight: 700;
`;

export {
  FileLabel,
  Category,
  CategoryFormWrapper,
  DateWrapper,
  ProblemWrapper,
  ProblemBtn,
};
