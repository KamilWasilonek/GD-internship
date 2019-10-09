import { IBestsellerItem } from '@app/shared/interfaces/bestseller-item.interface';
import * as fromBestSalesActions from './actions';

export interface BestSalesState {
  data: IBestsellerItem[];
  isLoadingFailed: boolean;
}

export const initialBestSalesState = {
  data: [],
  isLoadingFailed: false,
};

export function reducer(state = initialBestSalesState, action: fromBestSalesActions.BestSalesActions): BestSalesState {
  switch (action.type) {
    case fromBestSalesActions.LOAD_BEST_SALES_PRODUCTS_SUCCESS: {
      const data = action.payload;

      return {
        ...state,
        data,
        isLoadingFailed: false,
      };
    }

    case fromBestSalesActions.LOAD_BEST_SALES_PRODUCTS_FAIL: {
      return {
        ...state,
        isLoadingFailed: true,
      };
    }

    default:
      return state;
  }
}
