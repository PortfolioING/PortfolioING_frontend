import styled from "styled-components";
const sizeStyles = {
  xs: {
    padding: "8px 20px",
    borderRadius: "20px",
  },
  sm: {
    padding: "10px 25px",
    fontSize: "16px",
    borderRadius: "30px",
  },
  lg: {
    padding: "13px 150px",
    fontSize: "20px",
    borderRadius: "50px",
  },
  xl: {
    width: "620px",
    height: "45px",
    fontSize: "15px",
    borderRadius: "50px",
  },
};
const colorCombination = {
  BlackWhiteB: {
    background: "black",
    color: "white",
    border: "black",
  },
  BlackWhiteW: {
    background: "black",
    color: "white",
    border: "white",
  },
  WhiteBlackB: {
    background: "white",
    color: "black",
    border: "black",
  },
  LimeBlackL: {
    background: "#e4ff0d",
    color: "black",
    border: "#e4ff0d",
  },
};
const Button = styled.button`
  white-space: nowrap;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};

  font-size: ${(props) => sizeStyles[props.size]?.fontSize};
  padding: ${(props) => sizeStyles[props.size]?.padding};
  border-radius: ${(props) => sizeStyles[props.size]?.borderRadius};

  border: 1px solid ${(props) => colorCombination[props.mainColor]?.border};
  color: ${(props) => colorCombination[props.mainColor]?.color};
  background-color: ${(props) => colorCombination[props.mainColor]?.background};
`;
export { Button };
