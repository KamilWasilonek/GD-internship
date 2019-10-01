import { createFeatureSelector, createSelector } from '@ngrx/store';
import { HomePageState } from '..';
import { ArrivalsState } from './reducer';
import { IArrivals } from '@app/shared/interfaces/arrivals.interface';

export const selectHomePageState = createFeatureSelector<HomePageState>('homePage');

export const selectState = createSelector(
  selectHomePageState,
  (state: HomePageState) => {
    return state.arrivals;
  }
);

export const selectData = createSelector(
  selectState,
  (state: ArrivalsState) => {
    return state.data;
  }
);

export const selectIsFailed = createSelector(
  selectState,
  (state: ArrivalsState) => {
    return state.isFailed;
  }
);

export const selectCombinedData = createSelector(
  selectData,
  selectIsFailed,
  (sliderData: IArrivals[], isFailed: boolean) => {
    return isFailed ? [] : sliderData;
  }
);
