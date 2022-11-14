import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { StateProvider } from './Component/StateProvider';
import Reducer, { initialState } from './Component/Reducer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} Reducer={Reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>
);