import React from "react";
import { Button } from "./Button.styles";
export default function Btn({ children, onClick, ...props }) {
  return (
    <Button onClick={onClick} {...props}>
      {children}
    </Button>
  );
}
