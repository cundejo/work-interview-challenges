import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from './theme/themes';
import { GlobalStyles } from './theme/global';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

