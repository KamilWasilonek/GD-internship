import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductsState } from '..';

export const selectProductsState = createFeatureSelector<ProductsState>('productsList');

export const selectState = createSelector(
  selectProductsState,
  (state: ProductsState) => {
    return state.productDetails;
  }
);
