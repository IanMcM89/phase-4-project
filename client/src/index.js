import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *,
  *::before, 
  *::after {
    box-sizing: border-box;
  }

  html, body {
    width: 100vw;
    height: 100vh;
    margin: 0;
  }

  body {
    background: url("/images/background.png") repeat;
    background-size: 400px;
    font-family: BlinkMacSystemFont,-apple-system,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Fira Sans","Droid Sans","Helvetica Neue",Helvetica,Arial,sans-serif;
    overflow: hidden;
  }

  /* --- Animation Keyframes --- */

  @keyframes slideIn {
    0% {
      transform: translateX(500px) scale(.2);
    }
    100% {
      transform: translateX(0px) scale(1);
    }
  }

  @keyframes slideUp {
    0% {
      transform: translateY(300px);
    }
    100% {
      transform: translateY(0px);
    }
  }

  @keyframes slideDown {
    0% {
      transform: translateY(-1000px);
    }
    100% {
      transform: translateY(0px);
    }
  }

  @keyframes slideRight {
    0% {
      transform: translateX(-1000px) scale(.2);
    }
    100% {
      transform: translateX(0px) scale(1);
    }
  }

  @keyframes slideLeft {
    0% {
      transform: translateX(1000px) scale(.2);
    }
    100% {
      transform: translateX(0px) scale(1);
    }
  }

  @keyframes expand {
    0% {
      transform: translateX(1400px) scale(.2);
    }
    100% {
      transform: translateX(0px) scale(1);
    }
  }

  @keyframes appear {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes swoopLeft {
    0% {
      transform: translateX(0px);
    }
    100% {
      transform: translateX(-2000px);
    }
  }

  @keyframes swoopRight {
    0% {
      transform: translateX(0px);
    }
    100% {
      transform: translateX(2000px);
    }
  }

  @keyframes swoopUp {
    0% {
      transform: translateY(0px);
    }
    100% {
      transform: translateY(-2000px);
    }
  }

  @keyframes swoopDown {
    0% {
      transform: translateY(0px);
    }
    100% {
      transform: translateY(2000px);
    }
  }

  @keyframes hoverIn {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(.9);
    }
  }

  @keyframes hoverOut {
    0% {
      transform: scale(.9);
    }
    100% {
      transform: scale(1);
    }
  }
`;

ReactDOM.render(
  <BrowserRouter>
    <GlobalStyle />
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);