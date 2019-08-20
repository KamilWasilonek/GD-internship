const express = require('express');
const router = express.Router();
const controller = require('./controller');
const memcacheMiddleware = require('./memcache.middleware');

router.get('/api/products', memcacheMiddleware(), controller.getProducts);
router.get('/api/products/:id',memcacheMiddleware(), controller.getProductById);
router.get('/api/filters', memcacheMiddleware(),controller.getFilters);
router.get('**', controller.notFound);
module.exports = router;
