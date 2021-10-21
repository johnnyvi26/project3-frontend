import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// IMPORT ROUTER
import { BrowserRouter as Route } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Route>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Route>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
