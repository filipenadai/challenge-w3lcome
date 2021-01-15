import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body {
    background: #fff;
    color: #4d4d4d;
    -webkit-font-smoothing: antialiased;
  }
  body, input, button {
    font-family: 'Bai Jamjuree', sans-serif;
    font-size: 16px;
  }
  button {
    cursor: pointer;
  }
`;
