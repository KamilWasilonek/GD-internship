import { AppState } from '..';
import { createSelector } from '@ngrx/store';
import { WishListState } from './reducer';

export const selectAppState = (state: AppState) => state;

export const selectWishList = createSelector(
  selectAppState,
  (state: AppState) => state.wishList
);

export const selectProducts = (state: WishListState) => state.products;

export const selectLoadingError = (state: WishListState) => state.isLoadingError;
