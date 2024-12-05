const mongoose = require('mongoose');

const schema = mongoose.Schema({
    name: {type: String, required: true},
    date: {type: Date, required: true},
    game: {type: String, required: true},
    members: {type: String, required: true}
});

module.exports = mongoose.model("Event", schema)