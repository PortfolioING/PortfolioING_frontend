import styled from "styled-components";
import PropTypes from "prop-types";

const Input = styled.textarea.attrs((props) => ({
  type: props.type || "text",
  rows: props.rows || 3, // 기본 줄 수
}))`
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "40px"};
  padding: 10px 20px; /* 여백 */
  box-sizing: border-box;
  border: 1px solid #c1c1c1;
  border-radius: ${(props) =>
    props.chat === "true" ? "0px 30px 30px 30px" : "30px"};
  font-size: 16px;
  resize: none; /* 크기 조정 비활성화 */
  white-space: pre-wrap; /* 줄바꿈 및 공백 유지 */
  word-wrap: break-word; /* 단어 줄바꿈 */
  overflow-wrap: break-word; /* 브라우저 호환 줄바꿈 */
  &:focus {
    border: 1px solid #e4ff0d;
    outline: none;
  }
`;

Input.propTypes = {
  children: PropTypes.oneOf([undefined]),
};

export default Input;
