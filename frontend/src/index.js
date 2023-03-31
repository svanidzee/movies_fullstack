import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter } from 'react-router-dom';
import { CssBaseline } from '@mui/material';

import App from './App';
import { theme, Globals } from './theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Globals />
      <App />
    </ThemeProvider>
  </BrowserRouter>,
);
