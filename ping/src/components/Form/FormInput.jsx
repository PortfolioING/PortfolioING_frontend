import styled from "styled-components";
import PropTypes from "prop-types";
const sizeStyles = {
  sm: {
    padding: "8px 14px 8px 15px",
    fontSize: "13px",
  },
  lg: {
    width: "350px",
    height: "50px",
  },
  xl: {
    width: "550px",
    height: "50px",
  },
};
const Input = styled.input.attrs((props) => ({
  type: props.type || "text",
}))`
  width: ${(props) => sizeStyles[props.size]?.width};
  height: ${(props) => sizeStyles[props.size]?.height};
  padding: 10px 20px;
  box-sizing: border-box;
  border: 1px solid #c1c1c1;
  border-radius: ${(props) =>
    props.chat === "true" ? "0px 30px 30px 30px" : "30px"};
  font-size: 16px;
  &:focus {
    border: 1px solid #e4ff0d;
    outline: none;
  }
`;

Input.propTypes = {
  children: PropTypes.oneOf([undefined]), // input은 children을 가지지 않음
};

export default Input;
