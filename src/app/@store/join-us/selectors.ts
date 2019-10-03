import { createSelector } from '@ngrx/store';

import { AppState } from '..';

export const selectAppState = (state: AppState) => state;

export const selectState = createSelector(
  selectAppState,
  (state: AppState) => {
    return state.joinUs;
  }
);
