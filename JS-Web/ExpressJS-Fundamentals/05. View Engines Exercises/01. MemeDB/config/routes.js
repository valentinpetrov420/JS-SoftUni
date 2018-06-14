const handlers = require('../handlers');
const multer = require('multer');

let upload = multer({
    dest: './public/memes'
});

module.exports = (app) => {
    app.get('/', handlers.home.index);

    app.get('/meme/add', handlers.meme.addGet);
    app.post('/meme/add', upload.single('image'), handlers.meme.addPost);
    app.get('/memes/all', handlers.meme.allGet);
    app.get('/memes/details/:id', handlers.meme.detailsGet);

    app.get('/genre/add', handlers.genre.addGet);
    app.post('/genre/add', handlers.genre.addPost);

    app.use('/api', handlers.api);

};