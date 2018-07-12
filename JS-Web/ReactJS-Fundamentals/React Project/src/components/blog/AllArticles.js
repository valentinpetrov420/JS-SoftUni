import requester from "../../api/requester";
import Article from "./Article";
import React, { Component } from 'react';

export default class AllArticles extends Component {
    constructor(props) {
        super(props);
        this.state = { articles: [] }
    }

    getPosts = () =>
        requester.get('appdata', 'articles', 'kinvey')
            .then(res => {
                this.setState({ articles: res })
            });

    componentDidMount = () => this.getPosts();

    render = () => {
        return (
            <section id="viewBlog">
                {this.state.articles.map((article, i) => <Article key={article._id} index={i} {...article} />)}
            </section>
        )
    }
}