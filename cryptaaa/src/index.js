import React from 'react';
import ReactDOM from 'react-dom/client'; // исправлено: импортируем createRoot
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root')); // создаем root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
