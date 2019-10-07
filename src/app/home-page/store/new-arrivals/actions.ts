import { Action } from '@ngrx/store';
import { IArrivals } from '@app/shared/interfaces/arrivals.interface';

export const LOAD_ARRIVALS = '[New Arrivals] Load New Arrivals';
export const LOAD_ARRIVALS_SUCCESS = '[New Arrivals] Load New Arrivals Success';
export const LOAD_ARRIVALS_FAIL = '[New Arrivals] Load New Arrivals Fail';

export class LoadArrivalsAction implements Action {
  readonly type = LOAD_ARRIVALS;
}

export class LoadArrivalsSuccessAction implements Action {
  readonly type = LOAD_ARRIVALS_SUCCESS;

  constructor(public readonly payload: IArrivals[]) {}
}

export class LoadArrivalsFailAction implements Action {
  readonly type = LOAD_ARRIVALS_FAIL;
}

export type ArrivalsAction = LoadArrivalsAction | LoadArrivalsSuccessAction | LoadArrivalsFailAction;
