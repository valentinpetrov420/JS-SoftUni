import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import articleService from '../../services/articleService';

export default class Post extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: null
        };
    }
    render() {
        const isAuthorized = this.props.author == sessionStorage.getItem('username') || sessionStorage.getItem('userRole') == 'admin';
        const authorizedSection =
            <li className="action">
                <Link to='/Article/Edit' className="editPost">Edit</Link>
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
                    <b>Content: </b>{this.props.content}
                </div>
                <div className="content">
                    <div className="info">
                        <b>Posted: </b>{articleService.createdBeforeDays(this.props._kmd.ect)} ago
                    </div>
                    <div className="controls">
                        <ul>
                            <li className="action">
                                <Link to={'/Article/Details/' + this.props._id}>Details</Link>
                            </li>
                            {isAuthorized ? authorizedSection : null}
                        </ul>
                    </div>
                </div>
            </div>
        </article>
    )
    }
}