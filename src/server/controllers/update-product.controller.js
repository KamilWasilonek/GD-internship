const Product = require('../models/product.model');

exports.updateProductAddedToWishList = async function(req, res) {
  const updatedProduct = {
    addedToWishList: req.body.status,
  };

  Product.findOneAndUpdate({ id: req.body.id }, { $set: updatedProduct }, { new: true }, function(response) {
    res.send(response);
  });
};
