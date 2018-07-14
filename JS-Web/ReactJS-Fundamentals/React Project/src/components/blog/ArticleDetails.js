import React, {Component, Fragment} from 'react';

import requester from '../../api/requester'
import articleService from '../../services/articleService';
import {Link} from "react-router-dom";
import observer from "../../api/observer";
import model from '../../models/articleModel';
import DocumentTitle from 'react-document-title';
import userService from "../../services/userService";

function getRequestData(state, defaultState) {
    let data = {};

    for (let key of Object.keys(defaultState)) {
        data[key] = state[key];
    }
    return data;
}

export default class ArticleDetailsContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            _id: '',
            title: '',
            content: '',
            genre: '',
            url: '',
            author: '',
            createdOn: '',
        };
        this.dataModel = {
            ...model.defaultState,
            ...this.props.extraState
        };
    }

    deleteAuthor = () => {
        console.log(this.state.author);
        userService.getByUsername(this.state.author).then((res) => {
            let data = res[0]._id;
            userService.delete.send(data)
                .then(userService.delete.success)
                .catch(userService.delete.fail);
            observer.trigger(observer.events.redirect, '/blog');
        })
    };

    componentDidMount = () => {
        console.log(this.props.match);
        let articleId = this.props.match.params.id;
        console.log(articleId);
        this.setState({_id: articleId});
        requester.get('appdata', 'articles/' + articleId, 'kinvey')
            .then(res => {
                this.setState({
                    createdOn: res._kmd.ect,
                    ...res
                })
            })
            .catch(console.log);
    };
    render = () => {
        const isAdmin = sessionStorage.getItem('userRole') === 'admin';
        const authorizedSection = <div className="border-danger">
            <Link to='#' onClick={this.deleteAuthor} className="btn-danger">Ban User</Link>
            <div>
                <Link to={'/Article/Edit/' + this.state._id} className="editPost">Edit</Link>
            </div>
        </div>;
        return (
            <DocumentTitle title={this.state.title}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <h1 className="mt-4">{this.state.title}</h1>
                        Genre: {this.state.genre}
                        <p>Posted {articleService.createdBeforeDays(this.state.createdOn)} by {this.state.author}</p>
                        {isAdmin ? authorizedSection : null}
                        <p className="lead">{this.state.content}</p>
                    </div>
                </div>
            </div>
            </DocumentTitle>
        )
    }
}