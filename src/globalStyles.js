import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
  ${reset};
  
  body {
    font-family: "Do Hyeon";
    background-color: #333;
  }
    
  a {
    color: inherit;
  }

  main {
    width: 80%;
    margin: 0 auto;
    padding: 20px;
  }
`;