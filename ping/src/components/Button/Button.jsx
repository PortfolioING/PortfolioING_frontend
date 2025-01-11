import React from "react";
import { Button } from "./Button.styles";
export default function Btn({ size = "lg", children, onClick, ...props }) {
  return (
    <Button size={size} onClick={onClick} {...props}>
      {children}
    </Button>
  );
}
