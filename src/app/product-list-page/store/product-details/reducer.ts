import * as productDetailsActions from './actions';
import { IProductDetails } from '@app/shared/interfaces/product-detail/product-datails.interface';

export interface ProductDetailsState {
  data: IProductDetails;
  isFailed: boolean;
}

export const initialProductDetailsState: ProductDetailsState = {
  data: undefined,
  isFailed: undefined,
};

// tslint:disable-next-line: only-arrow-functions
export function reducer(state = initialProductDetailsState, action: productDetailsActions.ProductDetailsAction): ProductDetailsState {
  switch (action.type) {
    case productDetailsActions.LOAD_DETAILS_SUCCESS: {
      const data = action.payload;

      return {
        ...state,
        data,
        isFailed: false,
      };
    }

    case productDetailsActions.LOAD_DETAILS_FAIL: {
      return {
        ...state,
        isFailed: true,
      };
    }

    default: {
      return state;
    }
  }
}
