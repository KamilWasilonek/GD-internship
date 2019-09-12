const root = 'https://project-angular-gd.herokuapp.com/api/';
const endpoints = {
  slideshow: 'slideshow',
  advertisments: 'advertisments',
  subscriptions: 'subscriptions',
  socials: 'socials',
  bestsellers: 'products?ids=1,3,6',
  newArrivals: 'products?ids=5,8,13,15',
  productDetails: 'products/1',
};

const slideshowURL = `${root}${endpoints.slideshow}`;
const advertismentsURL = `${root}${endpoints.advertisments}`;
const subscriptionsURL = `${root}${endpoints.subscriptions}`;
const socialsURL = `${root}${endpoints.socials}`;
const bestsellersURL = `${root}${endpoints.bestsellers}`;
const newArrivalsURL = `${root}${endpoints.newArrivals}`;
const productDetailsURL = `${root}${endpoints.productDetails}`;

export { slideshowURL, advertismentsURL, subscriptionsURL, socialsURL, bestsellersURL, newArrivalsURL, productDetailsURL };
