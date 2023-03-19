import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Routers/App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';

import 'bootstrap';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/js/bootstrap.js';

// CSS
import 'antd/dist/antd.css';
import "./assets/libs/admin-resources/jquery.vectormap/jquery-jvectormap-1.2.2.css";
import "./assets/css/preloader.min.css";
import "bootstrap/scss/bootstrap.scss";
import './assets/css/bootstrap.min.css';
import "./assets/css/icons.min.css";
import "./assets/css/custom.css";
import "./assets/css/app.min.css";
import "./assets/scss/main.scss";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

reportWebVitals();
