import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';

import * as sliderActions from './actions';
import { ISlide } from '@app/shared/interfaces/banner.interface';
import { SliderService } from '@app/shared/services/slider.service';

@Injectable()
export class SliderEffects {
  @Effect() loadSlider$ = this.actions$.pipe(
    ofType(sliderActions.LOAD_SLIDER),
    mergeMap(() =>
      this.sliderService.getSlideshow().pipe(
        map((slides: ISlide[]) => new sliderActions.LoadSliderSuccessAction(slides)),
        catchError(() => of(new sliderActions.LoadSliderFailAction()))
      )
    )
  );

  constructor(private readonly actions$: Actions, private readonly sliderService: SliderService) {}
}
