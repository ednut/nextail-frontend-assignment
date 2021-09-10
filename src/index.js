import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import App from './App';

const theme = {
  lightRed: '#f95f60',
  white: '#ffffff',
  green: '#a0d468',
  red: '#da3f52',
  lightGrey: '#e2e7ec',
  grey: '#95a0ae',
  textColor: '#424242',
  borderColor: '#e2e2e2',
  harsh: '#c0c9d4'
};

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 16px;
  }
  * {
    box-sizing: border-box; 
    margin: 0; 
    padding: 0;
  }
  body {
    background: #f4f7fa;
    font-family: 'Noto Sans', sans-serif;
  }
  a, button{
    text-decoration: none;
    outline: none;
  }
`;

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <React.StrictMode>
      <GlobalStyle />
      <App />
    </React.StrictMode>
  </ThemeProvider>,
  document.getElementById('root')
);
