const productsController = require('./products.controller');
const slideController = require('./slide.controller');
const Product = require('../models/product.model');
const PRODUCTS_REDUNDANT_PROPS = ['relatedProducts', 'description'];

async function getHomepage(req, res) {
    try {
        let randomProducts = new Set();

        let [slideshow, products] = await Promise.all([slideController.getSlideshow(req, res), productsController.getProducts(req, res)]);

        const productClone = [...products];
        while (Array.from(randomProducts).length !== 4) {
            const cleanedUpProduct = _cleanUpProductProperties(productClone[Math.floor(Math.random() * products.length)]);
            randomProducts.add(cleanedUpProduct);

        }
        console.log(randomProducts);

        const bestSales = productClone.slice(0, 3);

        const homePageAggregated = {
            arrivals: Array.from(randomProducts),
            bestSales,
            slideshow,
        };
        console.log(homePageAggregated)
        return res.json(homePageAggregated);
    }
    catch (err) {
        return next(err);
    }

};

function _cleanUpProductProperties(product) {
    const productClone = { ...product };

    PRODUCTS_REDUNDANT_PROPS.forEach(property => {
        delete productClone[property];
    });

    return productClone;
}


module.exports = { getHomepage }