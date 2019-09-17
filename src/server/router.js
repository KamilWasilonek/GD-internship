const express = require('express');
const router = express.Router();
const controller = require('./controller');
const slideController = require('./controllers/slide.controller');
const memcacheMiddleware = require('./memcache.middleware');

router.get('/products', memcacheMiddleware(), controller.getProducts);
router.get('/products/:id', memcacheMiddleware(), controller.getProductById);
router.get('/filters', memcacheMiddleware(), controller.getFilters);
router.get('/homePage', memcacheMiddleware(), controller.getHomepage);
router.get('/slideshow', memcacheMiddleware(), slideController.getSlideShow);
router.get('/advertisments', memcacheMiddleware(), controller.getAdvertisments);
router.get('/socials', memcacheMiddleware(), controller.getSocials);
router.post('/subscriptions', controller.addSubscription);
router.delete('/subscriptions/:email', controller.deleteSubscription);
router.get('**', controller.notFound);

module.exports = router;
