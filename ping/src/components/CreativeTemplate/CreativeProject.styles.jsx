import styled from "styled-components";

const Wrapper = styled.div`
  width: 340px;
  height: 180px;
  display: flex;
  flex-direction: column;
  box-shadow: 1px 1px 1px 1px black;
  border-radius: 20px;
  padding: 20px;
  box-sizing: border-box;

  background-color: ${(props) =>
    props.color ? props.color.subColor : "defaultColor"};
`;

export { Wrapper };
