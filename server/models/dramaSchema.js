const mongoose = require('mongoose');

const dramaSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    imgURL: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Dramas', dramaSchema);