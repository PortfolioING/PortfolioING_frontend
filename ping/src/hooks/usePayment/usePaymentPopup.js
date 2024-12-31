import { useState } from "react";
export function usePaymentPopup() {
  const [popup, setPopup] = useState(false);

  const handlePopupClose = () => {
    setPopup(false);
  };

  const handlePopupOpen = () => {
    setPopup(true);
  };

  return { popup, handlePopupClose, handlePopupOpen };
}
