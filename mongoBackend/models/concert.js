const mongoose = require('mongoose');

const concertSchema = new mongoose.Schema({
    venue: {type: String, required:true},
    headliner: {type: String, required:true},
    start: {type: String, required: true},
    end: {type: String, required: true},
    ticketlink: {type: String, required: true}
});

const Concert = mongoose.model('Concert', concertSchema);

module.exports = Concert;