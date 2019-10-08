import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductsState } from '..';
import { ProductDetailsState } from '.';

export const selectProductsState = createFeatureSelector<ProductsState>('productsList');

export const selectState = createSelector(
  selectProductsState,
  (state: ProductsState) => {
    return state.productDetails;
  }
);

export const selectDescription = createSelector(
  selectState,
  (state: ProductDetailsState) => {
    return {
      name: state.data.name,
      title: state.data.title,
      description: state.data.description,
    };
  }
);

export const selectOptions = createSelector(
  selectState,
  (state: ProductDetailsState) => {
    return {
      sizes: state.data.sizes,
      amountInStock: state.data.amountInStock,
      choosenDetails: state.choosenProductDetails,
    };
  }
);

export const selectAddToCard = createSelector(
  selectState,
  (state: ProductDetailsState) => {
    return { price: state.data.price, choosenDetails: state.choosenProductDetails };
  }
);

export const selectDataLoadingStatus = createSelector(
  selectState,
  (state: ProductDetailsState) => {
    return Object.values(state.dataLoadingStatus).every(value => value === true);
  }
);
