import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }

  body {
    -webkit-font-smoothing: antialiased;
    font-family: 'Ubuntu', sans-serif;
  }

  ul, li {
    list-style: none;
  }

  img {
    max-width: 100%;
  }

  #root {
    margin: 0 auto;
  }

  button {
    cursor: pointer;
  }
`;
