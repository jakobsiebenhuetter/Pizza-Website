import React from 'react';

import App from './App.jsx';


import { createRoot } from 'react-dom/client'

createRoot(document.getElementById('app')).render(<App></App>);

document.querySelector('.search').addEventListener('click', () => {
    const modal = document.querySelector('#modal');
    if(modal.classList.contains('active')) {
        modal.classList.remove('active');
    } else {
        modal.classList.add('active');
    };  
});