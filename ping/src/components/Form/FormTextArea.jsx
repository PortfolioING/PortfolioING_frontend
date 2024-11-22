import styled from "styled-components";
import PropTypes from "prop-types";

const TextArea = styled.textarea.attrs((props) => ({
  type: props.type || "text",
  rows: props.rows || 5,
}))`
  width: 550px;
  height: "40px";
  padding: 10px 20px;
  box-sizing: border-box;
  border: 1px solid #c1c1c1;
  border-radius: ${(props) =>
    props.chat === "true" ? "0px 30px 30px 30px" : "30px"};
  font-size: 16px;
  resize: none;
  white-space: pre-wrap;
  word-wrap: break-word;
  overflow-wrap: break-word;
  &:focus {
    border: 1px solid #e4ff0d;
    outline: none;
  }
`;

TextArea.propTypes = {
  children: PropTypes.oneOf([undefined]),
};

export default TextArea;
