import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box; // Estudar BOX SIZING VIDEO MIKE (BOX MODEL)
  }

  body {
    background: radial-gradient(150.76% 72.54% at 75.31% 82.75%, #141F33 0%, #0F1726 82.81%) no-repeat;
    -webkit-font-smoothing: antialiased;
    width: 100vw;
    height: 100vh;
  }

  body, input, button {
    font-family: 'Source Sans Pro', sans-serif;
    font-style: normal;
  }

  #root {
    margin:0 auto;
    padding-top: 10px;
    padding-left: 10px;
    padding-right: 10px;
  }

  button{
    cursor: pointer;
  }

`;
