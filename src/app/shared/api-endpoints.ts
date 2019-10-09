import { environment } from '../../environments/environment';
const endpoints = {
  slideshow: 'slideshow',
<<<<<<< HEAD
  advertisments: 'advertisments',
  advertismentExternal: 'advertismentsExternal',
=======
  advertisments: 'advertisements',
>>>>>>> Fix issues
  subscriptions: 'subscriptions',
  socials: 'socials',
  filters: 'filters',
  bestsellers: 'products?ids=1,3,6',
  newArrivals: 'products?ids=1,5,8,13',
  productDetails: 'products/1',
  updateProduct: 'updateProduct',
  wishList: 'wishList',
};

const slideshowURL = `${environment.serverUrl}${endpoints.slideshow}`;
const advertismentExternalURL = `${environment.serverUrl}${endpoints.advertismentExternal}`;
const advertismentsURL = `${environment.serverUrl}${endpoints.advertisments}`;
const subscriptionsURL = `${environment.serverUrl}${endpoints.subscriptions}`;
const socialsURL = `${environment.serverUrl}${endpoints.socials}`;
const bestsellersURL = `${environment.serverUrl}${endpoints.bestsellers}`;
const newArrivalsURL = `${environment.serverUrl}${endpoints.newArrivals}`;
const productDetailsURL = `${environment.serverUrl}${endpoints.productDetails}`;
const filterURL = `${environment.serverUrl}${endpoints.filters}`;
const updateProductURL = `${environment.serverUrl}${endpoints.updateProduct}`;
const loadWishListURL = `${environment.serverUrl}${endpoints.wishList}`;

export {
  slideshowURL,
  advertismentsURL,
  subscriptionsURL,
  socialsURL,
  bestsellersURL,
  newArrivalsURL,
  productDetailsURL,
  filterURL,
  advertismentExternalURL,
  updateProductURL,
  loadWishListURL,
};
