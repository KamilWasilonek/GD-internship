import { createSelector } from '@ngrx/store';
import { AppState } from '..';
import { SocialIconsState } from './reducer';

export const selectSocialIconsState = (state: AppState) => state.socialIcons;

export const selectSocialIconsData = createSelector(
  selectSocialIconsState,
  (state: SocialIconsState) => state.data
);
