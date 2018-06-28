import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Time from './App';
import registerServiceWorker from './registerServiceWorker';

setInterval(() => {
    ReactDOM.render(Time(), document.getElementById('root'))
}, 1000);

registerServiceWorker();