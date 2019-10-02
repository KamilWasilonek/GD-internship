import { Action } from '@ngrx/store';
import { IProductDetails } from '@app/shared/interfaces/product-detail/product-datails.interface';

export const LOAD_DETAILS = '[PRODUCT DETAILS] Load Product Details';
export const LOAD_DETAILS_SUCCESS = '[PRODUCT DETAILS] Load Product Details Success';
export const LOAD_DETAILS_FAIL = '[PRODUCT DETAILS] Load Product Details Fail';

export class LoadProductDetailsAction implements Action {
  readonly type = LOAD_DETAILS;
}

export class LoadProductDetailsSuccessAction implements Action {
  readonly type = LOAD_DETAILS_SUCCESS;

  constructor(public readonly payload: IProductDetails) {}
}

export class LoadProductDetailsFailAction implements Action {
  readonly type = LOAD_DETAILS_FAIL;
}

export type ProductDetailsAction = LoadProductDetailsAction | LoadProductDetailsSuccessAction | LoadProductDetailsFailAction;
