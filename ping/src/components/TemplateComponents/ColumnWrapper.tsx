import React from "react";
import styled from "styled-components";

export default function ColumnWrapper({ children }) {
  return <ColumnStyle>{children}</ColumnStyle>;
}

const ColumnStyle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
