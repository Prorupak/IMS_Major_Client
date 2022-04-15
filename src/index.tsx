import { ThemeProvider } from 'styled-components';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

import { theme } from './Themes/theme';
import GlobalStyles from './Themes/GlobalStyles';

ReactDOM.render(
  <>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <App />
      </Router>
    </ThemeProvider>
  </>,
  document.getElementById('root')
);