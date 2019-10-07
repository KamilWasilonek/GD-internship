import { Action } from '@ngrx/store';
import { IArrivals } from '@app/shared/interfaces/arrivals.interface';

export const LOAD_PRODUCTS = '[Wish-list] Load Products';
export const LOAD_PRODUCTS_SUCCESS = '[Wish-list] Load Products Succes';
export const LOAD_PRODUCTS_FAIL = '[Wish-list] Load Products Fail';

export const ADD_TO_WITH_LIST = 'Add To Wish List';
export const REMOVE_FROM_WISH_LIST = 'Remove From Wish List';

export const UPDATE_PRODUCT = 'Update Product "addedToWishList" property';

export class LoadProductsAction implements Action {
  readonly type = LOAD_PRODUCTS;
}

export class LoadProductsSuccessAction implements Action {
  readonly type = LOAD_PRODUCTS_SUCCESS;

  constructor(public readonly payload: IArrivals[]) {}
}

export class LoadProductsFailAction implements Action {
  readonly type = LOAD_PRODUCTS_FAIL;
}

export class AddToWishListAction implements Action {
  readonly type = ADD_TO_WITH_LIST;

  constructor(public readonly payload: IArrivals) {}
}

export class RemoveFromWishListAction implements Action {
  readonly type = REMOVE_FROM_WISH_LIST;

  constructor(public readonly payload: IArrivals) {}
}

export class UpdateProductAction implements Action {
  readonly type = UPDATE_PRODUCT;

  constructor(public readonly payload: { id: string; status: boolean }) {}
}

export type WishListActions =
  | LoadProductsAction
  | LoadProductsSuccessAction
  | LoadProductsFailAction
  | AddToWishListAction
  | RemoveFromWishListAction
  | UpdateProductAction;
