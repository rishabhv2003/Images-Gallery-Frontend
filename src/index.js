import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

// components
import Header from './Header';
import Images from './ImageComp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='mainContainer'>
      <Header />
      <Images />
    </div>
  </React.StrictMode>
);

reportWebVitals();
