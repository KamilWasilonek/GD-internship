const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.get('/products', controller.getProducts);
router.get('/products/:id', controller.getProductById);
module.exports = router;
