import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import 'normalize.css';
import App from './App';
import LevelProvider from './components/LevelProvider'

ReactDOM.render(
  <React.StrictMode>
    <LevelProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </LevelProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
