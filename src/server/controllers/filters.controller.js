const Filter = require('../models/filters.model');
const productsController = require('./products.controller')

exports.getFilters = async function (req, res) {
    return Filter.find((err, filters) => {
        // console.log(products.getProducts)
       
        const rangeFilter = filters.find(el => el.type === 'range');
        const productsSorted = JSON.parse(JSON.stringify(productsController.getProducts)).sort((a, b) => b.price - a.price);
        // const productsSorted = productsController.getProducts.sort((a, b) => b.price - a.price);
        const mostExpensive = productsSorted[0].price;
        const cheapest = productsSorted[productsSorted.length - 1].price;

        rangeFilter.range = [cheapest, mostExpensive];
        res.json(filters);
    });

}