import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  h1, h2, h3, h4, h5, h6, p, li {
    margin: 0;
    padding: 0;
    color: white;
  }

  html {
    font-family: sans-serif;
    background-color: #212121;
    width: 100%;
    height: 100%;
    text-align: center;
  }

  &::-webkit-scrollbar {
    display: none;
  }

  &::-webkit-scrollbar {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
