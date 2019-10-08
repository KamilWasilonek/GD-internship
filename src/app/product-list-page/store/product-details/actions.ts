import { Action } from '@ngrx/store';
import { IProductDetails } from '@app/shared/interfaces/product-detail/product-datails.interface';

export const LOAD_DETAILS = '[PRODUCT DETAILS] Load Product Details';
export const LOAD_DETAILS_SUCCESS = '[PRODUCT DETAILS] Load Product Details Success';
export const LOAD_DETAILS_FAIL = '[PRODUCT DETAILS] Load Product Details Fail';
export const SEND_DETAILS_COMPONENTS_LOADING_STATUS = '[PRODUCT DETAILS COMPONENT] Send Product Details Component Loading status';
export const SEND_CHOOSEN_SIZE = '[PRODUCT DETAILS] Send Choosen Size of Product';
export const SEND_QUANTITY_INCREAMENT = '[PRODUCT DETAILS] Send Quantity Increment of Product';
export const SEND_QUANTITY_DECREAMENT = '[PRODUCT DETAILS] Send Quantity Decrement of Product';

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

export class SendLoadingStatusAction implements Action {
  readonly type = SEND_DETAILS_COMPONENTS_LOADING_STATUS;
  constructor(public readonly payload: string) {}
}

export class ChooseSizeAction implements Action {
  readonly type = SEND_CHOOSEN_SIZE;
  constructor(public readonly payload: string) {}
}

export class SendQuantityIncreamentAction implements Action {
  readonly type = SEND_QUANTITY_INCREAMENT;
}

export class SendQuantityDecreamentAction implements Action {
  readonly type = SEND_QUANTITY_DECREAMENT;
}

export type ProductDetailsAction =
  | LoadProductDetailsAction
  | LoadProductDetailsSuccessAction
  | LoadProductDetailsFailAction
  | SendLoadingStatusAction
  | ChooseSizeAction
  | SendQuantityIncreamentAction
  | SendQuantityDecreamentAction;
