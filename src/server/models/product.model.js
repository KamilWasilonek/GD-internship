const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  addedToWishList: Boolean,
  amountInStock: Number,
  availability: Array,
  brand: String,
  category: String,
  description: String,
  id: String,
  name: String,
  price: Number,
  rating: Number,
  relatedProducts: Array,
  sex: String,
  sizes: Array,
  swatches: Array,
  thumbnailImageSrc: String,
  title: String,
});

const Product = mongoose.model('products', ProductSchema);

module.exports = Product;
