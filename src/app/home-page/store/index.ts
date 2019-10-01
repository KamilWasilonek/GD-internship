import { ActionReducerMap } from '@ngrx/store';

import * as fromSlider from './slider';
import * as fromArrivals from './new-arrivals';

export interface HomePageState {
  slider: fromSlider.SliderState;
  arrivals: fromArrivals.ArrivalsState;
}

export const reducers: ActionReducerMap<HomePageState> = {
  slider: fromSlider.reducer,
  arrivals: fromArrivals.reducer,
};

export const effects = [fromSlider.SliderEffects, fromArrivals.ArrivalsEffects];
