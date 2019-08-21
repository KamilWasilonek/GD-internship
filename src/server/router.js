const express = require('express');
const router = express.Router();
const controller = require('./controller');
const memcacheMiddleware = require('./memcache.middleware');

router.get('/api/products', memcacheMiddleware(), controller.getProducts);
router.get(
    '/api/products/:id',
    memcacheMiddleware(),
    controller.getProductById
);
router.get('/api/filters', memcacheMiddleware(), controller.getFilters);
router.get('/api/homePage', memcacheMiddleware(), controller.getHomepage);
router.post('/api/subscriptions', controller.addSubscription);
router.delete('/api/subscriptions/:email', controller.deleteSubscription);
router.get('**', controller.notFound);

module.exports = router;
