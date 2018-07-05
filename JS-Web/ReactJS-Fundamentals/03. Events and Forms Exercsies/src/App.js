import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import SignUpForm from './components/SignUpForm';
import LoginForm from './components/LoginForm';
import LoggedInScreen from "./components/logged-in/LoggedInScreen";

class App extends Component {
    constructor() {
        super();
        let route = '';
        if(localStorage.getItem('token')){
            route = 'loggedIn'
        }
        this.state = {
            route
        };
        this.renderPage = this.renderPage.bind(this);
        this.switchForm = this.switchForm.bind(this);
        this.setLoggedIn = this.setLoggedIn.bind(this);
    }

    renderPage() {
        if (this.state.route === 'login') {
            return <LoginForm setLoggedIn={this.setLoggedIn}/>;
        } else if (this.state.route === 'loggedIn'){
            return <LoggedInScreen/>
        }
        return <SignUpForm/>;
    }

    switchForm() {
        if (this.state.route === 'login') {
            this.setState({route: ''});
        } else {
            this.setState({route: 'login'});
        };
    }
    setLoggedIn(){
        if(this.state.route === 'login'){
            this.setState({route: 'loggedIn'});
        };
    }

    render() {
        return (
            <div className="App wrapper">
                <button onClick={this.switchForm} className="btn btn-primary">Switch Form</button>
                {this.renderPage()}
            </div>
        );
    }
}

export default App;
