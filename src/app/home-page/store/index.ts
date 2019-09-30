import { ActionReducerMap } from '@ngrx/store';

import * as fromSlider from './slider';

export interface HomePageState {
  slider: fromSlider.SliderState;
}

export const reducers: ActionReducerMap<HomePageState> = {
  slider: fromSlider.reducer,
};

export const effects = [fromSlider.SliderEffects];
