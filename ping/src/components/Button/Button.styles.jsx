import styled from "styled-components";

const Button = styled.button`
  border: none;
  font-family: Pretendard-Regular;
  font-size: ${(props) => props.btnfontSize || "12px"};
  font-weight: ${(props) => props.btnfontWeight || "500"};
  width: ${(props) => props.btnwidth || "100px"};
  height: ${(props) => props.btnheight || "100px"};
  border: 1px solid ${(props) => props.btnbordercolor || "#000000"};
  color: ${(props) => props.btnfontcolor || "#000000"};
  background-color: ${(props) => props.btnbackgroundcolor || "white"};
  border-radius: ${(props) => props.btnborderradius || "50px"};
`;
export { Button };
