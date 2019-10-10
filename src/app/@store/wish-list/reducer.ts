import * as fromWishListActions from './actions';
import { IArrivals } from '@app/shared/interfaces/arrivals.interface';

export interface WishListState {
  products: IArrivals[];
  isLoadingError: boolean;
}

export const initialState = {
  products: [],
  isLoadingError: false,
};

export function reducer(state = initialState, action: fromWishListActions.WishListActions): WishListState {
  switch (action.type) {
    case fromWishListActions.LOAD_PRODUCTS_SUCCESS: {
      const products = action.payload;

      return {
        ...state,
        products,
        isLoadingError: false,
      };
    }

    case fromWishListActions.LOAD_PRODUCTS_FAIL: {
      return {
        ...state,
        isLoadingError: true,
      };
    }

    case fromWishListActions.ADD_TO_WITH_LIST: {
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    }

    case fromWishListActions.REMOVE_FROM_WISH_LIST: {
      const productsToRemove = action.payload;

      const products = state.products.filter(product => product.id !== productsToRemove.id);

      return {
        ...state,
        products,
      };
    }

    default: {
      return state;
    }
  }
}
