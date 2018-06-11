const Meme = require('../models/Meme');
const Genre = require('../models/Genre');

module.exports.allGet = (req, res) => {
    Meme.find()
        .then(memes => {

            let data = {
                memes: memes
            };

            res.render('meme/all', data);
        });
};

module.exports.addGet = (req, res) => {
    Genre.find()
        .then(genres => {
            res.render('meme/add', {
                genres: genres
            });
        });
};

module.exports.addPost = (req, res) => {
    let memeObj = req.body;
    memeObj.image = '\\' + req.file.path;

    Meme.create(memeObj).then(meme => {
        Genre.findById(meme.genre)
            .then(genre => {
                genre.memes.push(meme._id);
                genre.save();
            });

        res.redirect('/memes/all');
    });
};

module.exports.detailsGet = (req, res) => {
    let id = req.params.id;

    Meme.findById(id)
        .populate('genre')
        .then(meme => {
            if (!meme) {
                res.sendStatus(404);
                return;
            }

            let data = {
                meme: meme
            };

            res.render('meme/details', data);
        });
};