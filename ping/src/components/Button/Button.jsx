import React from "react";
import { Button } from "./Button.styles";
export default function Btn({ childern, onClick, ...props }) {
  return (
    <Button onClick={onClick} {...props}>
      {childern}
    </Button>
  );
}
