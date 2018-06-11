const mongoose = require('mongoose');

let memeSchema = mongoose.Schema({
    title: {
        type: mongoose.SchemaTypes.String,
        require: true
    },
    image: {
        type: mongoose.SchemaTypes.String,
        require: true
    },
    description: {
        type: mongoose.SchemaTypes.String
    },
    votes: {
        type: mongoose.SchemaTypes.Number,
        default: 0
    },
    datestamp: {
        type: mongoose.SchemaTypes.Date,
        default: Date.now
    },
    genre: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Genre'
    }
});

let Meme = mongoose.model('Meme', memeSchema);

module.exports = Meme;