import { Injectable } from '@angular/core';
import { Actions, ofType, Effect } from '@ngrx/effects';

import * as fromWishList from './actions';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { UpdateProductService } from '@app/shared/services/update-product.service';
import { of } from 'rxjs';
import { IArrivals } from '@app/shared/interfaces/arrivals.interface';
import { WishListService } from '@app/shared/services/wish-list.service';
@Injectable()
export class WishListEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly updateProductService: UpdateProductService,
    private readonly wishListService: WishListService
  ) {}

  @Effect() updateProduct$ = this.actions$.pipe(
    ofType(fromWishList.UPDATE_PRODUCT),
    map((action: fromWishList.UpdateProductAction) => action.payload),
    mergeMap(action => this.updateProductService.updateProduct(action))
  );

  @Effect() loadProduct$ = this.actions$.pipe(
    ofType(fromWishList.LOAD_PRODUCTS),
    mergeMap(() =>
      this.wishListService.loadWishList().pipe(
        map((products: IArrivals[]) => new fromWishList.LoadProductsSuccessAction(products)),
        catchError(_err => of(new fromWishList.LoadProductsFailAction()))
      )
    )
  );
}
