import React from "react";
import { Button } from "./Button.styles";
export default function Btn({
  size = "lg",
  mainColor = "LimeBlack",
  children,
  onClick,
  ...props
}) {
  return (
    <Button size={size} mainColor={mainColor} onClick={onClick} {...props}>
      {children}
    </Button>
  );
}
