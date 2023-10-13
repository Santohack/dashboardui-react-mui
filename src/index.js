import './style.less'

import App from './App';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@mui/material';
import { theme } from './style/theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <ThemeProvider theme={theme} >
     <App />
  </ThemeProvider>
   
  </React.StrictMode>
);


