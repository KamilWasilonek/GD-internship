import { Action } from '@ngrx/store';
import { ISlide } from '@app/shared/interfaces/banner.interface';

export const LOAD_SLIDER = '[Banner] Load Slider';
export const LOAD_SLIDER_SUCCESS = '[Banner] Load Slider Success';
export const LOAD_SLIDER_FAIL = '[Banner] Load Slider Fail';

export class LoadSliderAction implements Action {
  readonly type = LOAD_SLIDER;
}

export class LoadSliderSuccessAction implements Action {
  readonly type = LOAD_SLIDER_SUCCESS;

  constructor(public readonly payload: ISlide[]) {}
}

export class LoadSliderFailAction implements Action {
  readonly type = LOAD_SLIDER_FAIL;
}

export type SliderAction = LoadSliderAction | LoadSliderSuccessAction | LoadSliderFailAction;
