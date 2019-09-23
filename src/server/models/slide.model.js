const mongoose = require('mongoose');

const SlideSchema = new mongoose.Schema({
    description: String,
    img: String,
    price: String,
    proposition: String,
    title: String,
});

const Slide = mongoose.model('slides', SlideSchema);

module.exports = Slide;
