const Article = require('mongoose').model('Article');

module.exports = {
    createGet: (req, res) => {
        res.render('articles/create')
    },
    createPost: (req, res) => {
        let articleArgs = req.body;

        let errorMsg = '';
        if (!req.isAuthenticated()) {
            errorMsg = 'notLogged';
        }
        else if (!articleArgs.title) {
            errorMsg = 'invalidTitle';
        }
        else if (!articleArgs.content) {
            errorMsg = 'invalidContent';
        }
        if (errorMsg) {
            res.render('articles/create', {error: errorMsg});
            return;
        }

        articleArgs.author = req.user.id;
        console.log(articleArgs);
        Article.create(articleArgs).then(res.redirect('/articles/allArticles'));
    },
    allArticles: (req, res) => {
        Article.find()
            .then(articles => {
                let data = {
                    articles: articles
                };

                res.render('articles/allArticles', data);
            })
    },
    editGet: (req, res) => {
        if(req.user == undefined){
            res.redirect('/');
            return;
        }
        let id = req.params.id;

        Article.findById(id)
            .then(article => {
                console.log(article);
                if (!article) {
                    res.sendStatus(404);
                    res.redirect('/');
                    return;
                }

                res.render('articles/edit', article);
            })
    },
    editPost: (req, res) => {
        let id = req.params.id;
        let editedArgs = req.body;
        Article.findById(id).then((article) => {
            if (!article){
                res.redirect('/');
                return;
            }

            article.content = editedArgs.editedContent;

            article.save().then(() => {
                res.redirect('/articles/allArticles')
            }).catch((err) => {
                console.log(err);
                res.render('articles/edit', article);
            });
        });
    },
    details: (req, res) => {
        let id = req.params.id;

        Article.findById(id).then((article) => {
            if (!article) {
                res.redirect('/');
                return;
            }

            res.render('articles/details', article);
        }).catch(() => {
            res.redirect('/');
        });
    },
    searchBox: (req, res) => {
        let searchArg = req.url.split('?searchBox=')[1];
        let searchResults = [];
        let searchResultArticles = Article.find().then(article => {
            for (let entry of article) {
                if(entry.title.includes(searchArg)){
                    searchResults.push(entry.title);
                }
            }
            console.log(searchResults);
        });
        let data = {
            searchResults: searchResults,
            searchArg: searchArg
        };

        res.render('articles/search', data);
    },
    getLatest: (req, res) => {
        Article.findOne({}, {}, { sort: { 'created_at' : -1 }}).then((article) => {
            res.render('articles/details', article);
        });
    }
};