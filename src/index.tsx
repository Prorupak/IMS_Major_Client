import { ThemeProvider } from 'styled-components';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { theme } from './Themes/theme';
import GlobalStyles from './Themes/GlobalStyles';
import { UsersContext } from './Hooks/useContext/UsersContext';

ReactDOM.render(
  <>
    <UsersContext>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <App />
      </ThemeProvider>
    </UsersContext>
  </>,
  document.getElementById('root')
);
