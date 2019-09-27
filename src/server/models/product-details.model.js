const mongoose = require('mongoose');

const ProductDetailsSchema = new mongoose.Schema({
    amountInStock: Number,
    description: String,
    id: String,
    name: String,
    price: Number,
    realtedProducts: Array,
    sizes: Array,
    thumbnailImageSrc: String,
    title: String,
    
});

const ProductDetails = mongoose.model('productsDetails', ProductDetailsSchema);

module.exports = ProductDetails;