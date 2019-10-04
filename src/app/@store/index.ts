import { ActionReducerMap } from '@ngrx/store';

import * as fromSocialIcons from './social-icons';
import * as fromJoinUs from './join-us';
import * as fromWishList from './wish-list';
export interface AppState {
  socialIcons: fromSocialIcons.SocialIconsState;
  joinUs: fromJoinUs.JoinUsState;
  wishList: fromWishList.WishListState;
}

export const reducers: ActionReducerMap<AppState> = {
  socialIcons: fromSocialIcons.reducer,
  joinUs: fromJoinUs.reducer,
  wishList: fromWishList.reducer,
};

export const effects = [fromSocialIcons.SocialIconsEffects, fromJoinUs.JoinUsEffects, fromWishList.WishListEffects];

