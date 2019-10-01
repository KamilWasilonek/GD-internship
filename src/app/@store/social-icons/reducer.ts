import * as socialIconsActions from './actions';
import { ISocialIcon } from '@app/shared/interfaces/social-icon.interface';

export interface SocialIconsState {
  data: ISocialIcon[];
}

export const initialSocialIconsState: SocialIconsState = {
  data: [],
};

export function reducer(state = initialSocialIconsState, action: socialIconsActions.SocialIconsAction): SocialIconsState {
  switch (action.type) {
    case socialIconsActions.LOAD_SOCIAL_ICONS_SUCCESS: {
      const data = action.payload;

      return {
        ...state,
        data,
      };
    }

    default: {
      return state;
    }
  }
}
