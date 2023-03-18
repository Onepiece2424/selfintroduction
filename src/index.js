import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';

// redux
import { Provider } from "react-redux";
import store from "./stores/index";

// bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);
