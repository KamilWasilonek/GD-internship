const products = require('../assets/mocks/products.json');
const filters = require('../assets/mocks/filters.json');

module.exports = {
    getProducts,
    getProductById,
    getFilters,
    notFound
};
const PRODUCTS_REDUNDANT_PROPS = ['relatedProducts', 'description'];
function getProducts(req, res) {
    const productsArrCopy = JSON.parse(JSON.stringify(products));
    const responseProducts = {
        total: productsArrCopy.length,
        products: productsArrCopy
    }
    const query = req.query;
    let cleanedProducts = productsArrCopy.map(_cleanUpProductProperties);

    if (query.ids) {
        const idsArr = req.query.ids.split(',').map(el => parseInt(el));

        const productsArr = cleanedProducts.filter(el => idsArr.some(id => String(id) === el.id))
        responseProducts.products = productsArr;
        res.json(responseProducts);
        return;
    }

    if (query.price) {
        const rangeArr = req.query.price.split(',').map(el => parseInt(el));
        const fromPrice = Number(rangeArr[0]);
        const toPrice = Number(rangeArr[1]);

        if (rangeArr.length === 1 || (rangeArr.length === 2 && (fromPrice === toPrice))) {
            cleanedProducts = cleanedProducts.filter(({ price }) => price === fromPrice)
        }

        if (rangeArr.length === 2) {
            cleanedProducts = cleanedProducts.filter(({ price }) => price >= fromPrice && price <= toPrice)
        }
    }

    if (query.category) {
        const categoriesArr = query.category.split(',');
        cleanedProducts = cleanedProducts.filter(el => categoriesArr.some(category => category === el.category))
    }

    if (query.gender) {
        cleanedProducts = cleanedProducts.filter(el => el.sex === query.gender)
    }

    if (query.size) {
        const sizesArr = query.size.split(',');
        cleanedProducts = cleanedProducts.filter(el => el.sizes.some(size => sizesArr.includes(size.toLowerCase())))
    }

    if (query.brand) {
        const brandsArr = query.brand.split(',');
        cleanedProducts = cleanedProducts.filter(el => brandsArr.some(brand => brand === el.brand));
    }

    const total = cleanedProducts.length;
    responseProducts.total = total


    cleanedProducts = cleanedProducts.slice(+query.start || 0, +query.end || cleanedProducts.length);
    responseProducts.products = cleanedProducts
    res.json(responseProducts);

    function _cleanUpProductProperties(product) {
        const productClone = JSON.parse(JSON.stringify(product))
        PRODUCTS_REDUNDANT_PROPS.forEach(property => {
            delete productClone[property];
        });

        return productClone;
    }
}
function getProductById(req, res) {
    let product = products.find((({ id }) => id === req.params.id));

    if (!product) {
        notFound(req, res);
        return;
    };

    product = JSON.parse(JSON.stringify(product));

    product.relatedProducts = products.filter(item => product.relatedProducts.some(id => id === item.id));

    res.json(product);
}
function getFilters(req, res) {
    const rangeFilter = filters.find(el => el.type === 'range');
    const productsSorted = JSON.parse(JSON.stringify(products)).sort((a, b) => b.price - a.price);

    const mostExpensive = productsSorted[0].price
    const cheapest = productsSorted[productsSorted.length - 1].price;

    rangeFilter.range = [cheapest, mostExpensive];
    res.json(filters);
}
function notFound(req, res) {
    res.status(404).send();
}