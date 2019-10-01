const ProductDetails = require('../models/product-details.model');
const notFound = async (req, res) => {
    res.status(404).send();
}
const productsController = require('./products.controller')

async function getProductById(req, res) {
    console.log(res)

    if (err) {
        // return console.log(err);
    }

    const products = await productsController.getProducts(req, res);
    console.log(products);
    // console.log(products)
    let product = products.find(({ id }) => id === req.params.id);
    console.log(product)

    // let product = products.find(({ id }) => id === req.params.id);

    if (!product) {
        notFound(req, res);
        return;
    }

    product = JSON.parse(JSON.stringify(products));
    console.log(product);
    product.relatedProducts = products.filter(item => product.relatedProducts.some(id => id === item.id));

    res.json(product);


}

module.exports = { getProductById };