import styled from "styled-components";
import React, { useEffect, useRef } from "react";
import Sortable from "sortablejs";
export default function RowWrapper({ children }) {
  const rowRef = useRef(null);

  useEffect(() => {
    if (rowRef.current) {
      new Sortable(rowRef.current, {
        group: "components",
        animation: 150,
        ghostClass: "ping",
      });
    }
  }, []);

  return <Row ref={rowRef}>{children}</Row>;
}

const Row = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  box-sizing: border-box;
  .ping {
    border: 1px solid gray;
  }
`;
