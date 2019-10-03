import { ActionReducerMap } from '@ngrx/store';

import * as fromSocialIcons from './social-icons';
import * as fromJoinUs from './join-us';

export interface AppState {
  socialIcons: fromSocialIcons.SocialIconsState;
  joinUs: fromJoinUs.JoinUsState;
}

export const reducers: ActionReducerMap<AppState> = {
  socialIcons: fromSocialIcons.reducer,
  joinUs: fromJoinUs.reducer
};

export const effects = [fromSocialIcons.SocialIconsEffects,fromJoinUs.JoinUsEffects];


