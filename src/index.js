import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import fonticons from './Statics/css/all.min.css';
import './Statics/css/main.css';
import './Statics/css/main.css';
import {AuthProvader } from "./components/context/authcontext"
import { ContextProvader } from './components/context/dataContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvader>
      <ContextProvader>
      <App />
      </ContextProvader>
    </AuthProvader>
  </React.StrictMode>
);