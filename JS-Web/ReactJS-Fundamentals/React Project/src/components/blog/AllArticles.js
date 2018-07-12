import requester from "../../api/requester";
import Article from "./Article";
import React, {Component} from 'react';

export default class AllArticles extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            username: null
        }
    };

    getPosts = () => {
        if (!sessionStorage.getItem('username')) {
            let fakeName = 'anonymous';
            let fakePw = 'anonymous';
            let data = {username: fakeName, password: fakePw};
            requester.post('user', 'login', 'basic', data).then((res) => {
                sessionStorage.setItem('authtoken', res._kmd.authtoken);
                requester.get('appdata', 'articles', 'kinvey')
                    .then(res => {
                        this.setState({articles: res})
                    });
            });
        } else {
            requester.get('appdata', 'articles', 'kinvey')
                .then(res => {
                    this.setState({articles: res})
                });
        }
    };


    componentDidMount = () => this.getPosts();

    render = () => {
        return (
            <section id="viewBlog">
                {this.state.articles.map((article, i) => <Article key={article._id}
                                                                  index={i} {...article} {...this.props}/>)}
            </section>
        )
    }
}