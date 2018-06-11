const mongoose = require('mongoose');

let genreSchema = mongoose.Schema({
    name: {
        type: mongoose.SchemaTypes.String,
        require: true
    },
    memes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Meme'
    }]
});

let Genre = mongoose.model('Genre', genreSchema);

module.exports = Genre;