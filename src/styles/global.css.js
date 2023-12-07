import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
   body {
    margin: 0;
    padding: 0;
    font-family: Roboto, Helvetica, Sans-Serif;
    height: 100%;
    overflow: hidden; /* para não aparecer barra de rolagem */
  }

  #root {
    width: 100%;
    height: 100%; /* 100% da altura da janela de visualização */
    overflow: hidden; /* para não aparecer barra de rolagem */
  }

  input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    input:-webkit-autofill:active{
      -webkit-box-shadow: 0 0 0 30px white inset !important;
    }

    button, select {
        border: none;
        background-color: transparent;
    }

    textarea:focus, input:focus {
      box-shadow: 0 0 0 0;
      outline: 0;
    }

    p, h1, span, a, label, button, input, textarea {
      margin: 0;
    }

    input {
      border: none;
      margin: 0;
      padding: 0;
    }
    
    * {
      box-sizing: border-box;
    }
    
`;
