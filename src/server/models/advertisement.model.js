const mongoose = require('mongoose');

const AdvertisementSchema = new mongoose.Schema({
    description: String,
    price: String,
    title: String,
});

const Advertisement = mongoose.model('advertisements', AdvertisementSchema);

module.exports = Advertisement;