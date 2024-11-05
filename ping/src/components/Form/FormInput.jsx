import styled from "styled-components";
import PropTypes from "prop-types";

const Input = styled.input.attrs((props) => ({
  type: props.type || "text",
}))`
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "40px"};
  padding-left: 20px;
  box-sizing: border-box;
  border: 1px solid #c1c1c1;
  border-radius: ${(props) =>
    props.chat === "true" ? "0px 30px 30px 30px" : "30px"};
  &:focus {
    border: 1px solid #e4ff0d;
    outline: none;
  }
`;

Input.propTypes = {
  children: PropTypes.oneOf([undefined]),
};

export default Input;
