import React from 'react';
import ReactDOM from 'react-dom/client';
import AppComponent from './components/app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <AppComponent/>
  </React.StrictMode>
);
