const mongoose = require('mongoose');

const schema = mongoose.Schema({
    name: {type: String, required: true},
    author: {type: String, required: true},
    genre: {type: String, required: true}
});

module.exports = mongoose.model("Book", schema)