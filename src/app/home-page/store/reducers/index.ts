import * as fromSlider from './slider.reducer';
import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

export interface HomePageState {
  slider: fromSlider.SliderState;
}

export const reducers: ActionReducerMap<HomePageState> = {
  slider: fromSlider.reducer,
};

export const getHomePageState = createFeatureSelector<HomePageState>('homePage');

export const getSliderState = createSelector(
  getHomePageState,
  (state: HomePageState) => {
    return state.slider;
  }
);
