import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';

import { SocialsService } from '@app/shared/services/socials.service';
import * as socialIconsActions from './actions';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { ISocialIcon } from '@app/shared/interfaces/social-icon.interface';
import { of } from 'rxjs';

@Injectable()
export class SocialIconsEffects {
  constructor(private readonly actions$: Actions, private readonly socialIconsService: SocialsService) {}

  @Effect() loadSocialIcons$ = this.actions$.pipe(
    ofType(socialIconsActions.LOAD_SOCIAL_ICONS),
    mergeMap(() =>
      this.socialIconsService.getSocialIcons().pipe(
        map((socialIcons: ISocialIcon[]) => new socialIconsActions.LoadSocialIconsSuccessAction(socialIcons)),
        catchError(() => of(new socialIconsActions.LoadSocialIconsFailAction()))
      )
    )
  );
}
