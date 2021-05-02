import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
  
  body * {
    font-family: 'Roboto', sans-serif;
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
