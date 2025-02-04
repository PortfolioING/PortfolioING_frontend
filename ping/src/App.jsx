import Router from "./pages/Router";
import { Normalize } from "styled-normalize";
import { createGlobalStyle } from "styled-components";

import "./reset.css";
import "./index.css";
import "./App.css";

const GlobalStyle = createGlobalStyle`
.react-datepicker {
  z-index: 5; /* 메뉴바보다 낮은 z-index 값 */
}

.react-datepicker__portal {
  z-index: 5; /* 팝업으로 열릴 경우 */
}
 
  @keyframes skeleton-loading {
    0% {
      background-color: #e0e0e0;
    }
    50% {
      background-color: #cfcfcf;
    }
    100% {
      background-color: #e0e0e0;
    }
  }
`;
const App = () => {
  return (
    <>
      <Normalize />
      <Router />
    </>
  );
};
export default App;
