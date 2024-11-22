import styled from "styled-components";
const sizeStyles = {
  xs: {
    width: "82px",
    height: "40px",
    borderRadius: "20px",
  },
  sm: {
    width: "132px",
    height: "40px",
    fontSize: "16px",
    borderRadius: "30px",
  },
  lg: {
    width: "350px",
    height: "50px",
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
  BlackWhite: {
    background: "black",
    color: "white",
    border: "black",
  },
  BlackWhiteW: {
    background: "black",
    color: "white",
    border: "white",
  },
  WhiteBlack: {
    background: "white",
    color: "black",
    border: "black",
  },
  LimeBlack: {
    background: "#e4ff0d",
    color: "black",
    border: "#e4ff0d",
  },
};
const Button = styled.button`
  white-space: nowrap;
  cursor: ${(props) => (props.isDisabled ? "no-drop" || "pointer" : "default")};
  border: none;
  font-size: ${(props) => sizeStyles[props.size]?.fontSize};

  width: ${(props) => sizeStyles[props.size]?.width};
  height: ${(props) => sizeStyles[props.size]?.height};
  border-radius: ${(props) => sizeStyles[props.size]?.borderRadius};

  border: 1px solid ${(props) => colorCombination[props.mainColor]?.border};
  color: ${(props) => colorCombination[props.mainColor]?.color};
  background-color: ${(props) => colorCombination[props.mainColor]?.background};
`;
export { Button };
