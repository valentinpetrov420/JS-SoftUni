import React, {Component} from 'react';
import Redirect from "react-router/es/Redirect";

export default class MyArticles extends Component{
    render = () => {
        if(sessionStorage.getItem('authtoken')) {
            return (
                <div>
                    My Articles
                </div>
            )
        } else {
            return (
                <Redirect to="/"/>
            )
        }
    };
}