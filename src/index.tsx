import { ThemeProvider } from 'styled-components';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { theme } from './Themes/theme';
import GlobalStyles from './Themes/GlobalStyles';

ReactDOM.render(
  <>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </>,
  document.getElementById('root')
);
