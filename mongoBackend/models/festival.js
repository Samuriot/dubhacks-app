const mongoose = require('mongoose');

const festivalSchema = new mongoose.Schema({
    venue: {type: String, required:true},
    performers: {type: String, required:true},
    start: {type: String, required: true},
    end: {type: String, required: true}
});

const Festival = mongoose.model('Festival', festivalSchema);

module.exports = Festival;