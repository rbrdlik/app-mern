const mongoose = require('mongoose');

const schema = mongoose.Schema({
    name: {type: String, required: true},
    artist: {type: String, required: true},
    year: {type: Number, required: true}
});

module.exports = mongoose.model("Album", schema)