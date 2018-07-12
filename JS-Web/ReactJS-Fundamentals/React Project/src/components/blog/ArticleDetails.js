import React, {Component, Fragment} from 'react';

import requester from '../../api/requester'
import articleService from '../../services/articleService';

export default class ArticleDetailsContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            _id: '',
            title: '',
            content: '',
            url: '',
            author: '',
            createdOn: '',
        }
    }

    componentDidMount = () => {
        let articleId = this.props.match.params.id;
        console.log(articleId);
        requester.get('appdata', 'articles/' + articleId, 'kinvey')
            .then(res => {
                this.setState({
                    createdOn: res._kmd.ect,
                    ...res
                })})
            .catch(console.log);
    };

    render = () => {
        return (
            <Fragment>
                <section id="viewArticleDetails">
                    <article id="articleDetails" className="article">
                        <div className="post-content">
                            <div className="title">
                                <strong>{this.state.title}</strong>
                            </div>
                            <div className="genre">
                                {this.state.genre}
                            </div>
                            <div className="content">
                                {this.state.content}
                            </div>
                            <span>
                                {articleService.createdBeforeDays(this.state.createdOn)} by {this.state.author}
                            </span>
                        </div>
                    </article>
                </section>
            </Fragment>
        )
    }
}