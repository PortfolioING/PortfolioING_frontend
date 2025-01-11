import styled from "styled-components";

const sizeStyles = {
  s: {
    fontSize: "18px",
    borderRadius: "30px",
  },
  m: {
    fontSize: "19px",
    borderRadius: "10px",
  },
  lg: {
    fontSize: "20px",
    borderRadius: "20px",
  },
};

const StyleColors = {
  Normal: {
    background: "#EAFF0D",
    color: "black",
    hoverBackground: "#8C9908",
  },
  Gray: {
    background: "#656565",
    color: "#9C9C9C",
  },
};

const Button = styled.button`
  white-space: nowrap;
  font-weight: 550;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  font-size: ${(props) => sizeStyles[props.size]?.fontSize};
  border-radius: ${(props) => sizeStyles[props.size]?.borderRadius};
  color: ${StyleColors.Normal.color};
  background-color: ${StyleColors.Normal.background};
  width: ${(props) => props.width || "auto"};
  height: ${(props) => props.height || "auto"};
  border: none;

  &:hover {
    background-color: ${(props) =>
      props.disabled
        ? StyleColors.Gray.background
        : StyleColors.Normal.hoverBackground};
  }

  &:disabled {
    background-color: ${StyleColors.Gray.background};
    color: ${StyleColors.Gray.color};
  }
`;

export { Button };
