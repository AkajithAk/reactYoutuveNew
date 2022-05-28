import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import CrudOperation from './Components/CRUD_Operatoin/CrudOperation';
import HideAndShowPassword from './Components/HideAndShowPassword/HideAndShowPassword';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <HideAndShowPassword />
);