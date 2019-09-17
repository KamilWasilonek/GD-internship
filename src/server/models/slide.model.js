const mongoose = require('mongoose');

const SlideSchema = new mongoose.Schema({
  title: String,
  proposition: String,
  description: String,
  price: String,
  img: String,
});

const Slide = mongoose.model('slides', SlideSchema);

module.exports = Slide;