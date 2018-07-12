import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import observer from "../../api/observer";

export default class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {username: null};

        observer.subscribe(observer.events.loginUser, this.userLoggedIn);
        observer.subscribe(observer.events.loggedOut, this.userLoggedOut);
    }

    userLoggedIn = username => {
        this.setState({username});
    };

    userLoggedOut = () =>
        this.setState({username: null});


    render = () => {
        console.log(sessionStorage.getItem('username'));
        const loggedInSection =
            <div>
                <NavLink className="nav" to='/myArticles'>My Articles</NavLink>
                <NavLink className="nav" to='/Article/Create'>Create Article</NavLink>
            </div>;

        const loggedOutSection =
            <div>
                <NavLink className="nav" to='/'>Sign in/Sign up</NavLink>
            </div>;
        return (
            <div className="title">
                <h4>
                    <NavLink className="nav" to='/blog'>Home</NavLink>
                    {!this.state.username ? loggedOutSection : null}
                    {this.state.username ? loggedInSection : null}
                </h4>
            </div>
        )
    }
}