import { Injectable } from '@angular/core';
import { Actions, ofType, Effect } from '@ngrx/effects';
import { of } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';

import { UpdateProductService } from '@app/shared/services/update-product.service';
import { IArrivals } from '@app/shared/interfaces/arrivals.interface';
import { WishListService } from '@app/shared/services/wish-list.service';
import * as fromWishList from './actions';
@Injectable()
export class WishListEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly updateProductService: UpdateProductService,
    private readonly wishListService: WishListService
  ) {}

  @Effect() updateProduct$ = this.actions$.pipe(
    ofType(fromWishList.UPDATE_PRODUCT),
    mergeMap((action: fromWishList.UpdateProductAction) =>
      this.updateProductService.updateProduct(action.payload).pipe(map(() => new fromWishList.UpdateProductSuccessAction()))
    )
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
