const Product = require('../models/product.model');
const controller = {};
const slideController = require('./slide.controller');
const ProductsDetails = require('../models/product-details.model');
const notFound = async (req, res) => {
    res.status(404).send();
}
controller.getProducts = async (req, res) => {
    try {
        return Product.find((err, products) => {
            const productsArrCopy = JSON.parse(JSON.stringify(products));
            const responseProducts = {
                products: productsArrCopy,
                total: productsArrCopy.length,
            };
            const query = req.query;
            let cleanedProducts = productsArrCopy.map(_cleanUpProductProperties);

            if (query.ids) {
                const idsArr = req.query.ids.split(',').map(el => parseInt(el, 10));

                const productsArr = cleanedProducts.filter(el => idsArr.some(id => String(id) === el.id));
                responseProducts.products = productsArr;
                res.json(responseProducts);
                return;
            }

            if (query.price) {
                const rangeArr = req.query.price.split(',').map(el => parseInt(el, 10));
                const fromPrice = Number(rangeArr[0]);
                const toPrice = Number(rangeArr[1]);

                if (rangeArr.length === 1 || (rangeArr.length === 2 && fromPrice === toPrice)) {
                    cleanedProducts = cleanedProducts.filter(({ price }) => price === fromPrice);
                }

                if (rangeArr.length === 2) {
                    cleanedProducts = cleanedProducts.filter(({ price }) => price >= fromPrice && price <= toPrice);
                }
            }

            if (query.category) {
                const categoriesArr = query.category.split(',');
                cleanedProducts = cleanedProducts.filter(el => categoriesArr.some(category => category === el.category));
            }

            if (query.gender) {
                cleanedProducts = cleanedProducts.filter(el => el.sex === query.gender);
            }

            if (query.size) {
                const sizesArr = query.size.split(',');
                cleanedProducts = cleanedProducts.filter(el => el.sizes.some(size => sizesArr.includes(size.toLowerCase())));
            }

            if (query.brand) {
                const brandsArr = query.brand.split(',');
                cleanedProducts = cleanedProducts.filter(el => brandsArr.some(brand => brand === el.brand));
            }

            const total = cleanedProducts.length;
            responseProducts.total = total;

            cleanedProducts = cleanedProducts.slice(+query.start || 0, +query.end || cleanedProducts.length);
            responseProducts.products = cleanedProducts;

            return res ? res.json(responseProducts) : responseProducts;
        });
    }
    catch (err) {
        return next(err);
    }
}
controller.getHomepage = async (req, res, next) => {
    try {
        let randomProducts = new Set();

        let [slideshow, products] = await Promise.all([slideController.getSlideshow(), controller.getProducts(req)]);

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
        return res.json(homePageAggregated);
    }
    catch (err) {
        return next(err);
    }

};

controller.getProductById = async (req, res, next) => {
    let product = await controller.getProducts(req);
    try {
        return ProductsDetails.find((err, productsDetails) => {

            productDetails = product.find(({ id }) => id === req.params.id);
            return res ? res.json(productDetails) : productsDetails;
        })

    }
    catch (err) {
        return next(err);
    }
}

const PRODUCTS_REDUNDANT_PROPS = ['relatedProducts', 'description'];
function _cleanUpProductProperties(product) {
    const productClone = { ...product };

    PRODUCTS_REDUNDANT_PROPS.forEach(property => {
        delete productClone[property];
    });

    return productClone;
}
module.exports = controller;
