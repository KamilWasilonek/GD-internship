const express = require('express');
const router = express.Router();
const controller = require('./controller');
const slideController = require('./controllers/slide.controller');
const advertisementsController = require('./controllers/advertisements.controller');
const socialController = require('./controllers/socials.controller');
const productsController = require('./controllers/products.controller');
const memcacheMiddleware = require('./memcache.middleware');
const filterController = require('./controllers/filters.controller');
const subscriptionsController = require('./controllers/subscriptions.controller');

router.get('/products', memcacheMiddleware(), productsController.getProducts);
router.get('/products/:id', memcacheMiddleware(), productsController.getProductById);
router.get('/filters', memcacheMiddleware(), filterController.getFilters);
router.get('/homepage', memcacheMiddleware(), productsController.getHomepage);
router.get('/slideshow', memcacheMiddleware(), slideController.getSlideshow);
router.get('/advertisments', memcacheMiddleware(), advertisementsController.getAdvertisement);
router.get('/socials', memcacheMiddleware(), socialController.getSocials);
router.post('/subscriptions', subscriptionsController.addSubscription);
router.get('**', controller.notFound);

module.exports = router;
