import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError, pluck } from 'rxjs/operators';

import * as bestSalesActions from './actions';
import { BestsellersService } from '@app/shared/services/bestsellers.service';
import { IBestsellerItem } from '@app/shared/interfaces/bestseller-item.interface';

@Injectable()
export class BestSalesEffects {
  @Effect() loadBestSalesProducts$ = this.actions$.pipe(
    ofType(bestSalesActions.LOAD_BEST_SALES_PRODUCTS),
    mergeMap(() =>
      this.bestSalesService.getBestsellers().pipe(
        pluck('products'),
        map((bestSalesProducts: IBestsellerItem[]) => new bestSalesActions.LoadBestSalesProductsSuccessAction(bestSalesProducts)),
        catchError(() => of(new bestSalesActions.LoadBestSalesProductsFailAction()))
      )
    )
  );

  constructor(private readonly actions$: Actions, private readonly bestSalesService: BestsellersService) {}
}
