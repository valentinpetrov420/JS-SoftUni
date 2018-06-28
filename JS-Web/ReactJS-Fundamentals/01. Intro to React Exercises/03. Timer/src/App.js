import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

const Time = () => (
    <div className="App">
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
            <h1 className="App-title">Welcome to React</h1>
            <h3>{new Date().toTimeString().split(' ')[0]}</h3>
        </header>
        <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
        </p>
    </div>
);

export default Time;