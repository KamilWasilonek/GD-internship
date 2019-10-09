import { Action } from '@ngrx/store';

import { IBestsellerItem } from '@app/shared/interfaces/bestseller-item.interface';

export const LOAD_BEST_SALES_PRODUCTS = '[BestSales] Load Best Sales Products';
export const LOAD_BEST_SALES_PRODUCTS_SUCCESS = '[BestSales] Load Best Sales Products Success';
export const LOAD_BEST_SALES_PRODUCTS_FAIL = '[BestSales] Load Best Sales Products Fail';

export class LoadBestSalesProductsAction implements Action {
  readonly type = LOAD_BEST_SALES_PRODUCTS;
}

export class LoadBestSalesProductsSuccessAction implements Action {
  readonly type = LOAD_BEST_SALES_PRODUCTS_SUCCESS;

  constructor(public readonly payload: IBestsellerItem[]) {}
}

export class LoadBestSalesProductsFailAction implements Action {
  readonly type = LOAD_BEST_SALES_PRODUCTS_FAIL;
}

export type BestSalesActions = LoadBestSalesProductsAction | LoadBestSalesProductsSuccessAction | LoadBestSalesProductsFailAction;
