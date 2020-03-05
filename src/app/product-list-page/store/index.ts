import { ActionReducerMap } from '@ngrx/store';

import * as fromProductDetails from './product-details';

export interface ProductsState {
  productDetails: fromProductDetails.ProductDetailsState;
}

export const reducers: ActionReducerMap<ProductsState> = {
  productDetails: fromProductDetails.reducer,
};

export const effects = [fromProductDetails.ProductDetailsEffects];
