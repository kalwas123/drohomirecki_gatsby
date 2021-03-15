import { createGlobalStyle } from "styled-components";
import colors from "src/assets/styles/colors.js";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        font-family: "Archia", sans-serif !important;
        font-weight: normal;
        color: ${colors.dark};
        -webkit-font-smoothing: antialiased;
 
    }
    ::selection {
        color: ${colors.white};
        background: ${colors.gold};
}
html {
    font-size: 10px;

    @media (min-width: 1400px) {
        font-size: 0.706vw;
  }
}
 body{
     overflow-x: hidden;
 }


    button{
        border: none;
        margin: 0;
        padding: 0;
        width: auto;
        overflow: visible;
        background: transparent;
        color: inherit;
        font: inherit;
        line-height: normal;
        -webkit-font-smoothing: inherit;
        -moz-osx-font-smoothing: inherit;
        -webkit-appearance: none;
    }
    button:focus {
        outline: none;
        box-shadow: none;
        }
`;

export default GlobalStyle;
