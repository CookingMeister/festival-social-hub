import React from 'react';
import ReactDOM from 'react-dom/client';
import App2 from './App2.jsx';
import { BrowserRouter } from 'react-router-dom';
import './styles/Main.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App2 />
    </BrowserRouter>
  </React.StrictMode>
);
