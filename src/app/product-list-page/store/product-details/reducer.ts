import * as productDetailsActions from './actions';
import { IProductDetails } from '@app/shared/interfaces/product-detail/product-datails.interface';
import { ILoadingStatus } from '@app/shared/interfaces/product-detail/loading-status.interface';
import { IChoosenProductDetails } from '@app/shared/interfaces/product-detail/choosen-product-details.interface';

export interface ProductDetailsState {
  data: IProductDetails;
  isFailed: boolean;
  dataLoadingStatus: ILoadingStatus;
  choosenProductDetails: IChoosenProductDetails;
}

export const initialProductDetailsState: ProductDetailsState = {
  data: {
    id: undefined,
    name: undefined,
    title: undefined,
    description: undefined,
    price: undefined,
    amountInStock: undefined,
    sizes: undefined,
    thumbnailImageSrc: undefined,
    realatedProducts: undefined,
  },
  isFailed: undefined,
  dataLoadingStatus: {
    gallery: false,
    description: false,
    options: false,
    addToCart: false,
  },
  choosenProductDetails: {
    size: undefined,
    quantity: undefined,
  },
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
        choosenProductDetails: {
          ...state.choosenProductDetails,
          size: data.sizes[0],
          quantity: data.amountInStock > 0 ? 1 : 0,
        },
      };
    }

    case productDetailsActions.LOAD_DETAILS_FAIL: {
      return {
        ...state,
        isFailed: true,
      };
    }

    case productDetailsActions.SEND_DETAILS_COMPONENTS_LOADING_STATUS: {
      const componentName = action.payload;

      return {
        ...state,
        dataLoadingStatus: {
          ...state.dataLoadingStatus,
          [componentName]: true,
        },
      };
    }

    case productDetailsActions.SEND_CHOOSEN_SIZE: {
      return {
        ...state,
        choosenProductDetails: {
          ...state.choosenProductDetails,
          size: action.payload,
        },
      };
    }

    case productDetailsActions.SEND_QUANTITY_INCREAMENT: {
      const isMaxAmount = state.choosenProductDetails.quantity < state.data.amountInStock;

      return {
        ...state,
        choosenProductDetails: {
          ...state.choosenProductDetails,
          quantity: isMaxAmount ? state.choosenProductDetails.quantity + 1 : state.choosenProductDetails.quantity,
        },
      };
    }

    case productDetailsActions.SEND_QUANTITY_DECREAMENT: {
      return {
        ...state,
        choosenProductDetails: {
          ...state.choosenProductDetails,
          quantity: state.choosenProductDetails.quantity > 0 ? state.choosenProductDetails.quantity - 1 : 0,
        },
      };
    }

    default: {
      return state;
    }
  }
}
