import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
//import * as serviceWorker from './serviceWorker'
ReactDOM.render(
  <React.StrictMode>
  <Router>
    <App updateAvailable={false} />
  </Router>
    
  </React.StrictMode>,
  document.getElementById('root')
);


