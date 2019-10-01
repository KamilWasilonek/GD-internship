const productsController = require('./products.controller');
const slideController = require('./slide.controller');
const Product = require('../models/product.model');
const PRODUCTS_REDUNDANT_PROPS = ['relatedProducts', 'description'];

async function getHomepage(req, res) {


    const randomProducts = new Set();
    let slideshow = await slideController.getSlideshow(req, res);
    const products = await productsController.getProducts(req,res)
    // let [slideshow, products] = await Promise.all([slideController.getSlideshow(req, res)]);
    console.log(products);

    const productClone = [...products];
    while (Array.from(randomProducts).length !== 4) {
        const cleanedUpProduct = _cleanUpProductProperties(productClone[Math.floor(Math.random() * products.length)]);
        randomProducts.add(cleanedUpProduct);
    }

    const bestSales = productClone.slice(0, 3);

    const homePageAggregated = {
        arrivals: Array.from(randomProducts),
        bestSales,
        slideshow,
    };
    console.log(homePageAggregated)
    res.json(homePageAggregated);

};

function _cleanUpProductProperties(product) {
    const productClone = { ...product };

    PRODUCTS_REDUNDANT_PROPS.forEach(property => {
        delete productClone[property];
    });

    return productClone;
}


module.exports = { getHomepage }