import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';

import * as productDetailsActions from './actions';
import { ProductDetailsService } from '@app/shared/services/product-details/product-details.service';
import { IProductDetails } from '@app/shared/interfaces/product-detail/product-datails.interface';

@Injectable()
export class ProductDetailsEffects {
  @Effect() loadArrivals$ = this.actions$.pipe(
    ofType(productDetailsActions.LOAD_DETAILS),
    mergeMap(() =>
      this.productDetailsService.getProductDetails().pipe(
        map((productDetails: IProductDetails) => new productDetailsActions.LoadProductDetailsSuccessAction(productDetails)),
        catchError(() => of(new productDetailsActions.LoadProductDetailsFailAction()))
      )
    )
  );

  constructor(private readonly actions$: Actions, private readonly productDetailsService: ProductDetailsService) {}
}
