const mongoose = require('mongoose');

const performerSchema = new mongoose.Schema({
    name: {type: String, required:true},
    genre: {type: String, required:true},
    logo: {type: String, required: true},
});

const Performer = mongoose.model('Performer', performerSchema);

module.exports = Performer;
