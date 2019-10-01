import { ActionReducerMap } from '@ngrx/store';

import * as fromSocialIcons from './social-icons';

export interface AppState {
  socialIcons: fromSocialIcons.SocialIconsState;
}

export const reducers: ActionReducerMap<AppState> = {
  socialIcons: fromSocialIcons.reducer,
};

export const effects = [fromSocialIcons.SocialIconsEffects];
