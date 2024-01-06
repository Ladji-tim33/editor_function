import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import Edit from './Edit';
// import Detai from './pages/PaysDetail';
import reportWebVital from './reportWebVitals';
import { BrowserRouter  } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    
    <Edit/>
   
    </BrowserRouter>
    
   
  </React.StrictMode>
);

reportWebVital()
