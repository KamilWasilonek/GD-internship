import * as fromWishListActions from './actions';
import { IArrivals } from '@app/shared/interfaces/arrivals.interface';

export interface WishListState {
  products: IArrivals[];
  isLoadingError: boolean;
}

export const initialState = {
  products: [
    {
      id: '5',
      category: 'shoes',
      name: 'NIKE AZTREK',
      brand: 'nike',
      title: 'THIS PRODUCT IS OFFERED IN UNISEX SIZE. ',
      description: 'This item is excluded from all promotions.',
      sex: 'man',
      price: 80,
      amountInStock: 13,
      rating: 5,
      swatches: [],
      availability: [1, 2],
      thumbnailImageSrc:
        'https://assets.reebok.com/images/w_840,h_840,f_auto,q_auto:sensitive,fl_lossy/bfe8bb63369045caa8a2a997013c7740_9366/Reebok_Aztrek_Blue_DV8816_01_standard.jpg',
      sizes: ['S', 'M', 'L'],
      relatedProducts: ['1', '2', '3', '4', '6', '7', '22', '23', '24', '25', '26'],
    },
    {
      id: '5',
      category: 'shoes',
      name: 'NIKE AZTREK',
      brand: 'nike',
      title: 'THIS PRODUCT IS OFFERED IN UNISEX SIZE. ',
      description: 'This item is excluded from all promotions.',
      sex: 'man',
      price: 80,
      amountInStock: 13,
      rating: 5,
      swatches: [],
      availability: [1, 2],
      thumbnailImageSrc:
        'https://assets.reebok.com/images/w_840,h_840,f_auto,q_auto:sensitive,fl_lossy/bfe8bb63369045caa8a2a997013c7740_9366/Reebok_Aztrek_Blue_DV8816_01_standard.jpg',
      sizes: ['S', 'M', 'L'],
      relatedProducts: ['1', '2', '3', '4', '6', '7', '22', '23', '24', '25', '26'],
    },
    {
      id: '5',
      category: 'shoes',
      name: 'NIKE AZTREK',
      brand: 'nike',
      title: 'THIS PRODUCT IS OFFERED IN UNISEX SIZE. ',
      description: 'This item is excluded from all promotions.',
      sex: 'man',
      price: 80,
      amountInStock: 13,
      rating: 5,
      swatches: [],
      availability: [1, 2],
      thumbnailImageSrc:
        'https://assets.reebok.com/images/w_840,h_840,f_auto,q_auto:sensitive,fl_lossy/bfe8bb63369045caa8a2a997013c7740_9366/Reebok_Aztrek_Blue_DV8816_01_standard.jpg',
      sizes: ['S', 'M', 'L'],
      relatedProducts: ['1', '2', '3', '4', '6', '7', '22', '23', '24', '25', '26'],
    },
    {
      id: '5',
      category: 'shoes',
      name: 'NIKE AZTREK',
      brand: 'nike',
      title: 'THIS PRODUCT IS OFFERED IN UNISEX SIZE. ',
      description: 'This item is excluded from all promotions.',
      sex: 'man',
      price: 80,
      amountInStock: 13,
      rating: 5,
      swatches: [],
      availability: [1, 2],
      thumbnailImageSrc:
        'https://assets.reebok.com/images/w_840,h_840,f_auto,q_auto:sensitive,fl_lossy/bfe8bb63369045caa8a2a997013c7740_9366/Reebok_Aztrek_Blue_DV8816_01_standard.jpg',
      sizes: ['S', 'M', 'L'],
      relatedProducts: ['1', '2', '3', '4', '6', '7', '22', '23', '24', '25', '26'],
    },
    {
      id: '5',
      category: 'shoes',
      name: 'NIKE AZTREK',
      brand: 'nike',
      title: 'THIS PRODUCT IS OFFERED IN UNISEX SIZE. ',
      description: 'This item is excluded from all promotions.',
      sex: 'man',
      price: 80,
      amountInStock: 13,
      rating: 5,
      swatches: [],
      availability: [1, 2],
      thumbnailImageSrc:
        'https://assets.reebok.com/images/w_840,h_840,f_auto,q_auto:sensitive,fl_lossy/bfe8bb63369045caa8a2a997013c7740_9366/Reebok_Aztrek_Blue_DV8816_01_standard.jpg',
      sizes: ['S', 'M', 'L'],
      relatedProducts: ['1', '2', '3', '4', '6', '7', '22', '23', '24', '25', '26'],
    },
  ],
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
