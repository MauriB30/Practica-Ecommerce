import React from 'react';
import ReactDOM from 'react-dom/client';
import AppCart from './AppCart';
import { BrowserRouter } from 'react-router-dom';
import { StrictMode } from 'react';

ReactDOM.createRoot(document.getElementById('root')).render(
   <StrictMode>
      <BrowserRouter>
         <AppCart />
      </BrowserRouter>
   </StrictMode>
);
