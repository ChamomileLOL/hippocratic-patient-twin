import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

/**
 * THE RENDER COVENANT
 * "I will fulfill according to my ability and judgment this oath."
 */
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    {/* The Brain is now connected to the Body */}
    <App />
  </React.StrictMode>
);