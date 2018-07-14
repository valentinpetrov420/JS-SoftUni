import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import articleService from '../../services/articleService';
import userService from '../../services/userService';
import observer from "../../api/observer";
//

export default class Post extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: null
        };
    }

    deleteAuthor = () => {
        console.log(this.props.author);
        userService.getByUsername(this.props.author).then((res) => {
            let data = res[0]._id;
            userService.delete.send(data)
                .then(userService.delete.success)
                .catch(userService.delete.fail);
            observer.trigger(observer.events.redirect, '/blog');
        })
    };

    render() {
        const isAuthorized = this.props.author === sessionStorage.getItem('username');
        const isAdmin = sessionStorage.getItem('userRole') === 'admin';
        const adminSection =
            <div>
                <Link to='#' onClick={this.deleteAuthor} className="btn-danger">Ban User</Link>
            </div>;
        const authorizedSection =
            <li className="action">
                <Link to={'/Article/Edit/' + this.props._id} className="editPost">Edit</Link>
            </li>;
        return(
        <article className="article">
            <div className="col rank">
                <span><b>Article</b> #{this.props.index + 1}</span>
            </div>
            <div className="title">
                <b>Title: </b>{this.props.title}
            </div>
            <div className="genre">
                <b>Genre: </b>{this.props.genre}
            </div>
            <div className="author">
                <b>Author: </b>{this.props.author}
            </div>
            <div className="content">
                <div className="content">
                    <div className="info">
                        <b>Posted: </b>{articleService.createdBeforeDays(this.props._kmd.ect)} ago
                    </div>
                    <div className="controls">
                        <ul>
                            <li className="action">
                                <Link to={'/Article/Details/' + this.props._id}>Details</Link>
                            </li>
                            {isAuthorized || isAdmin ? authorizedSection : null}
                            {isAdmin ? adminSection : null}
                        </ul>
                    </div>
                </div>
            </div>
        </article>
    )
    }
}