const Product = require('../models/product.model');

exports.getWishListProducts = async function(req, res) {
  Product.find(
    {
      addedToWishList: true,
    },
    (err, data) => {
      res.send(data);
    }
  );
};
