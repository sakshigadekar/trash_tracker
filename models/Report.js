const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({
    location: {
        type: String,
        required: false,
    },
    description: {
        type: String,
        required: false,
    },
    photos: [{
        data: Buffer, // Binary image data
        contentType: String, // MIME type of the image
    }],
});

module.exports = mongoose.model('Report', reportSchema);
