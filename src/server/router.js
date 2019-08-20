const express = require('express');
const router = express.Router();
const controller = require('./controller');
const memcacheMiddleware = require('./memcache.middleware');

router.get('/products', memcacheMiddleware(), controller.getProducts);
router.get('/products/:id',memcacheMiddleware(), controller.getProductById);
router.get('/api/filters', memcacheMiddleware(),controller.getFilters);
module.exports = router;
