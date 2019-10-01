import { Action } from '@ngrx/store';

import { ISocialIcon } from '@app/shared/interfaces/social-icon.interface';

export const LOAD_SOCIAL_ICONS = '[Header] Load Social Icons';
export const LOAD_SOCIAL_ICONS_SUCCESS = '[Header] Load Social Icons Success';
export const LOAD_SOCIAL_ICONS_FAIL = '[Header] Load Social Icons Fail';

export class LoadSocialIconsAction implements Action {
  readonly type = LOAD_SOCIAL_ICONS;
}

export class LoadSocialIconsSuccessAction implements Action {
  readonly type = LOAD_SOCIAL_ICONS_SUCCESS;

  constructor(public readonly payload: ISocialIcon[]) {}
}

export class LoadSocialIconsFailAction implements Action {
  readonly type = LOAD_SOCIAL_ICONS_FAIL;
}

export type SocialIconsAction = LoadSocialIconsAction | LoadSocialIconsSuccessAction | LoadSocialIconsFailAction;
