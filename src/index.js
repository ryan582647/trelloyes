
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';
import { STORE } from './STORE.js';

ReactDOM.render(
  <App store={STORE} />,
  document.getElementById('root'),
);

