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
    height: 25px;
    width: 170px;
    border-radius: 0px 20px 20px 20px;
    border: 1px solid #c1c1c1;
    display: flex;
    align-items: center;
    padding: 5px;
    color: #848484;
    font-size: 10px;
    box-sizing: border-box;
    .bold {
      color: red;
      margin-right: 10px;
      font-weight: 600;
      margin-left: 10px;
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
  background-color: ${(props) => (props.isActive ? "#fbb7cb" : "#FFE3E1")};
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

export { FileLabel, Category, CategoryFormWrapper, DateWrapper };
