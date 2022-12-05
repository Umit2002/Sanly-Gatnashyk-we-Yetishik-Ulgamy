import React from 'react';
import ReactDOMClienet from 'react-dom/client';

import './css/main.css';
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css';
const root = ReactDOMClienet.createRoot(document.getElementById('root'));

root.render(<App />);



