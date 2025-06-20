import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; // . = 현재 디렉토리 (index.js가 위치하고 있는 디렉토리 안에 있는 pp.js로부터)
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
