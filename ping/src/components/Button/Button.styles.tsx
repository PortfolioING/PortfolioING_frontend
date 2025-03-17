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
} as const;

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
} as const;

interface ButtonProps {
  color: keyof typeof StyleColors;
  size: keyof typeof sizeStyles;
  width?: string;
  height?: string;
  disabled?: boolean;
}

export const StyledButton = styled.button<ButtonProps>`
  white-space: nowrap;
  font-weight: 550;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  font-size: ${({ size }) => sizeStyles[size].fontSize};
  border-radius: ${({ size }) => sizeStyles[size].borderRadius};
  color: ${({ color }) => StyleColors[color].color};
  background-color: ${({ color }) => StyleColors[color].background};
  width: ${({ width }) => width || "auto"};
  height: ${({ height }) => height || "auto"};
  border: none;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: ${({ disabled, color }) =>
      disabled
        ? StyleColors.Gray.background
        : StyleColors[color].hoverBackground || StyleColors[color].background};
  }

  &:disabled {
    background-color: ${StyleColors.Gray.background};
    color: ${StyleColors.Gray.color};
  }
`;
