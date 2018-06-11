const Genre = require('../models/Genre');

module.exports.addGet = (req, res) => {
    res.render('genre/add');
};

module.exports.addPost = (req, res) => {
    let genreObj = req.body;
    genreObj.memes = [];

    Genre.create(genreObj)
        .then(() => {
            res.redirect('/');
        });
};