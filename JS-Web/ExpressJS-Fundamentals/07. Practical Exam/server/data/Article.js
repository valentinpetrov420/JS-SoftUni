const mongoose = require('mongoose');

let articleSchema = mongoose.Schema({
    title: {type: String, required: true},
    lockedStatus: {type: Boolean, required: true, default: false},
    //i couldnt be bothered to write the business logic for edits
    content: {type: String, required: true},
    author: {type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User'},
    date: {type: Date, required: true, default: Date.now()}
});

const Article = mongoose.model('Article', articleSchema);