import { environment } from '../../environments/environment';
const endpoints = {
  slideshow: 'slideshow',
  advertisments: 'advertisements',
  subscriptions: 'subscriptions',
  socials: 'socials',
  filters: 'filters',
  bestsellers: 'products?ids=1,3,6',
  newArrivals: 'products?ids=1,5,8,13',
  productDetails: 'products/1',
};

const slideshowURL = `${environment.serverUrl}${endpoints.slideshow}`;
const advertisementsURL = `${environment.serverUrl}${endpoints.advertisments}`;
const subscriptionsURL = `${environment.serverUrl}${endpoints.subscriptions}`;
const socialsURL = `${environment.serverUrl}${endpoints.socials}`;
const bestsellersURL = `${environment.serverUrl}${endpoints.bestsellers}`;
const newArrivalsURL = `${environment.serverUrl}${endpoints.newArrivals}`;
const productDetailsURL = `${environment.serverUrl}${endpoints.productDetails}`;
const filterURL = `${environment.serverUrl}${endpoints.filters}`;

export { slideshowURL, advertisementsURL, subscriptionsURL, socialsURL, bestsellersURL, newArrivalsURL, productDetailsURL, filterURL };
