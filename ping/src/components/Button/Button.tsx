import React from "react";
import { StyledButton } from "./Button.styles";

interface BtnProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: "Normal" | "Gray";
  size?: "s" | "m" | "lg";
  width?: string;
  height?: string;
  children: React.ReactNode;
}

export default function Button({
  color = "Normal",
  size = "lg",
  children,
  onClick,
  ...props
}: BtnProps) {
  return (
    <StyledButton color={color} size={size} onClick={onClick} {...props}>
      {children}
    </StyledButton>
  );
}
