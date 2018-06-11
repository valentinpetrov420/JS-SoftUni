const homeHandler = require('./home');
const memeHandler = require('./meme');
const genreHandler = require('./genre');
const apiHandler = require('./api');

module.exports = {
    home: homeHandler,
    meme: memeHandler,
    genre: genreHandler,
    api: apiHandler
};