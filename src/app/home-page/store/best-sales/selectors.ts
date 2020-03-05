import { createSelector, createFeatureSelector } from '@ngrx/store';

import { HomePageState } from '..';

export const selectHomePageState = createFeatureSelector<HomePageState>('homePage');

export const selectState = createSelector(
  selectHomePageState,
  (state: HomePageState) => {
    return state.bestSales;
  }
);
