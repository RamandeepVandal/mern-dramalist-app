const mongoose = require('mongoose');

const dramaSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    genre: [{
        type: String,
        required: true
    }]
})

module.exports = mongoose.model('Dramas', dramaSchema);