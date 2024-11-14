import Router from "./pages/Router";
import { Normalize } from "styled-normalize";
import { createGlobalStyle } from "styled-components";
import "./reset.css";
import "./App.css";
import { LoginProvider } from "./pages/LoginContext";
const GlobalStyle = createGlobalStyle`

  @font-face {
  font-family: "Pretendard-Regular";
  src: url("https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff")
    format("woff");
  font-weight: 400;
  font-style: normal;
}
.react-datepicker {
  z-index: 5; /* 메뉴바보다 낮은 z-index 값 */
}

.react-datepicker__portal {
  z-index: 5; /* 팝업으로 열릴 경우 */
}


  body {
    font-family: "Pretendard-Regular", sans-serif;
  }

`;
const App = () => {
  return (
    <>
      <GlobalStyle />
      <Normalize />
      <LoginProvider>
        <Router />
      </LoginProvider>
    </>
  );
};

export default App;
