import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Counter from './App';

ReactDOM.render(Counter(), document.getElementById('root'));

const reRender = ReactDOM.render;
export default reRender;