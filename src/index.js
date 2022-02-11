import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { ThemeContextProvider } from "./ThemeContext.jsx";



ReactDOM.render(
  <React.StrictMode>      
    <ThemeContextProvider>
      <App sx={{backgroundColor: "background.paper"}}/>      
    </ThemeContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
)