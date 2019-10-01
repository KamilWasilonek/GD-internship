import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError, pluck } from 'rxjs/operators';

import * as arrivalsActions from './actions';
import { ArrivalsService } from '@app/shared/services/arrivals.service';
import { IArrivals } from '@app/shared/interfaces/arrivals.interface';

@Injectable()
export class ArrivalsEffects {
  @Effect() loadArrivals$ = this.actions$.pipe(
    ofType(arrivalsActions.LOAD_ARRIVALS),
    mergeMap(() =>
      this.arrivalsService.getArrivals().pipe(
        pluck('products'),
        map((arrivals: IArrivals[]) => new arrivalsActions.LoadArrivalsSuccessAction(arrivals)),
        catchError(() => of(new arrivalsActions.LoadArrivalsFailAction()))
      )
    )
  );

  constructor(private readonly actions$: Actions, private readonly arrivalsService: ArrivalsService) {}
}
