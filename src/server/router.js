const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.get('/products', controller.getProducts)
module.exports = router;
