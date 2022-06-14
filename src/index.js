import React from 'react';
import { createRoot } from 'react-dom/client';

import { ContextProvider } from './store/context';
import App from './App';
import './index.css';



const root = createRoot(document.getElementById('root'));
root.render(
  <ContextProvider>
    <App />
  </ContextProvider>
);
