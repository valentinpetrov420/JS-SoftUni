
import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import reRender from './index';

let counter = 0;

function incrementCounter() {
    counter++;
    reRender(Counter(), document.getElementById('root'));
}

const Counter = () =>
    (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <h1 className="App-title">Welcome to React</h1>
                <h3>{counter}</h3>
            </header>
            <br/>
            <button onClick={incrementCounter}>Increment</button>
        </div>
    );

export default Counter;