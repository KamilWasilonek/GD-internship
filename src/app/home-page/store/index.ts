import { ActionReducerMap } from '@ngrx/store';

import * as fromSlider from './slider';
import * as fromArrivals from './new-arrivals';
import * as fromBestSales from './best-sales';

export interface HomePageState {
  slider: fromSlider.SliderState;
  arrivals: fromArrivals.ArrivalsState;
  bestSales: fromBestSales.BestSalesState;
}

export const reducers: ActionReducerMap<HomePageState> = {
  slider: fromSlider.reducer,
  arrivals: fromArrivals.reducer,
  bestSales: fromBestSales.reducer,
};

export const effects = [fromSlider.SliderEffects, fromArrivals.ArrivalsEffects, fromBestSales.BestSalesEffects];
