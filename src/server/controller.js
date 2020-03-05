const products = require('../assets/mocks/products.json');
const filters = require('../assets/mocks/filters.json');
const advertisments = require('../assets/mocks/adv.json');
const socials = require('../assets/config/social-links.json');
const advertisementExternal = require('../assets/mocks/advertisement.json');
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const slideController = require('./controllers/slide.controller');

const subscriptions = new Set();

module.exports = {
  addSubscription,
  deleteSubscription,
  getHomepage,
  notFound,
};
const PRODUCTS_REDUNDANT_PROPS = ['relatedProducts', 'description'];

function notFound(req, res) {
  res.status(404).send();
}

async function getHomepage(req, res) {
  const randomProducts = new Set();
  const productClone = [...products];
  const slideshow = await slideController.getSlideshow(req, res);
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
  console.log(homePageAggregated);
  return res.json(homePageAggregated);
}

function addSubscription(req, res) {
  const { email } = req.body;
  if (subscriptions.has(email)) {
    return res.json({ message: 'Already exists', isError: true });
  }

  if (!_isValidEmail(email)) {
    return res.json({ message: 'Not valid Email', isError: true });
  }
  subscriptions.add(email);
  return res.json({ message: 'Success' , isError: false});
}

function deleteSubscription(req, res) {
  const { email } = req.params;
  if (!_isValidEmail(email)) {
    return _sendEmailValidationError(res);
  }

  if (!subscriptions.has(email)) {
    return res.status(404).json({ error: 'Email not found' });
  }

  subscriptions.delete(email);
  res.status(202).send();
}

function _cleanUpProductProperties(product) {
  const productClone = { ...product };
  PRODUCTS_REDUNDANT_PROPS.forEach(property => {
    delete productClone[property];
  });

  return productClone;
}

function _isValidEmail(email) {
  return !!(email && email.match(EMAIL_PATTERN));
}
