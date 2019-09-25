import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';

import { SliderService } from '@app/shared/services/slider.service';
import * as sliderActions from '../actions/slider.actions';

@Injectable()
export class SliderEffects {
  @Effect() loadSlider$ = this.actions$.pipe(
    ofType(sliderActions.LOAD_SLIDER),
    mergeMap(() =>
      this.sliderService.getSlideshow().pipe(
        map(slideshow => new sliderActions.LoadSliderSuccessAction(slideshow)),
        catchError(() => of(new sliderActions.LoadSliderFailAction()))
      )
    )
  );

  constructor(private readonly actions$: Actions, private readonly sliderService: SliderService) {}
}
