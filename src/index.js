import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// components
import App from './App';
import { ThemeProvider } from './context/ThemeContext'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider.ThemeProvider>
      <App />
    </ThemeProvider.ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
