import { useState } from "react";

export function usePayment() {
  const [selectedCard, setSelectedCard] = useState(null);

  return { selectedCard, setSelectedCard };
}
