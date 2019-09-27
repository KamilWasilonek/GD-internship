import { environment } from '../../environments/environment';
const root = 'https://project-angular-gd.herokuapp.com/api/';
const endpoints = {
  slideshow: 'slideshow',
  advertisments: 'advertisments',
  subscriptions: 'subscriptions',
  socials: 'socials',
  filters: 'filters',
  bestsellers: 'products?ids=1,3,6',
  newArrivals: 'products?ids=5,8,13,15',
  productDetails: 'products/1',
};

const slideshowURL = `${environment.serverUrl}${endpoints.slideshow}`;
const advertismentsURL = `${environment.serverUrl}${endpoints.advertisments}`;
const subscriptionsURL = `${root}${endpoints.subscriptions}`;
const socialsURL = `${environment.serverUrl}${endpoints.socials}`;
const bestsellersURL = `${root}${endpoints.bestsellers}`;
const newArrivalsURL = `${environment.serverUrl}${endpoints.newArrivals}`;
const productDetailsURL = `${environment.serverUrl}${endpoints.productDetails}`;
const filterURL = `${environment.serverUrl}${endpoints.filters}`;

export { slideshowURL, advertismentsURL, subscriptionsURL, socialsURL, bestsellersURL, newArrivalsURL, productDetailsURL, filterURL };
