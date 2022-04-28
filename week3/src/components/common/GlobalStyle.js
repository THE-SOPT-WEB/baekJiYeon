import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset};

  @font-face {
    font-family: 'GongGothicMedium';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-10@1.0/GongGothicMedium.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
  
  html,
  body {
    width: 100%;
    height: 100%;
  }

  #root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background-color: #222;
  }

  html {
    font-size: 62.5%;
  }
  
  * {
    box-sizing: border-box;
  }

  body, button {
    font-family: GongGothicMedium;
  }
  
  button {
    cursor: pointer;
    border: none;
    outline: none;
  }
  
  a {
    text-decoration: none;
  }
`;

export default GlobalStyle;
