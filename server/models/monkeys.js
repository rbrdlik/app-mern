const mongoose = require('mongoose');

const schema = mongoose.Schema({
    gender: {type: String, required: true},
    race: {type: String, required: true},
    name: {type: String, required: true}
});

module.exports = mongoose.model("Monkey", schema)