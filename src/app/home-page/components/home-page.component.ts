import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Store, select } from '@ngrx/store';

import { IArrivals } from '@app/shared/interfaces/arrivals.interface';
import * as fromStore from '@app/@store';
import * as fromWishList from '@app/@store/wish-list';
import * as fromArrivals from '@app/home-page/store/new-arrivals';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  flags = {
    isBannerVisible: true,
    isArrivalsVisible: true,
    isViewMoreVisible: true,
    isAdvertismentsVisible: true,
    isWishListVisible: true,
  };

  wishListState$: Observable<fromWishList.WishListState>;
  productsState$: Observable<fromArrivals.ArrivalsState>;

  wishListProducts: IArrivals[];
  currentWishListProducts: IArrivals[];

  wishListProductsCounter = 3;

  wishListLoadMoreFlag = false;

  spinners = {
    arrivals: {
      message: 'Products are loading',
      isError: false,
    },
    wishList: {
      message: 'Loading wish list',
      isError: false,
    },
  };

  isSpinnerVisible = {
    arrivals: true,
    wishList: true,
  };

  constructor(private readonly store: Store<fromStore.AppState>) {}

  public ngOnInit(): void {
    this.getArrivals();
    this.getWishList();

    this.store.dispatch(new fromArrivals.LoadArrivalsAction());
    this.store.dispatch(new fromWishList.LoadProductsAction());
  }

  getArrivals(): void {
    this.productsState$ = this.store.pipe(
      select(fromArrivals.selectState),
      tap(arrivalsData => {
        if (arrivalsData.isFailed) {
          this.spinners.arrivals = {
            message: 'Can not load latest products',
            isError: true,
          };
        } else if (arrivalsData.data.length) {
          this.isSpinnerVisible.arrivals = false;
        }
      })
    );
  }

  getWishList(): void {
    this.wishListState$ = this.store.pipe(
      select(fromWishList.selectWishList),
      tap(state => {
        if (state.products.length === 0) {
          this.flags = {
            ...this.flags,
            isWishListVisible: false,
          };

          return;
        }

        this.flags = {
          ...this.flags,
          isWishListVisible: true,
        };

        this.isSpinnerVisible = {
          ...this.isSpinnerVisible,
          wishList: false,
        };

        this.wishListProducts = state.products;
        this.currentWishListProducts = this.calculateCurrentWistList(this.wishListProducts, this.wishListProductsCounter);
        this.wishListLoadMoreFlag = this.checkViewMoreProductsAmount(this.wishListProducts, this.wishListProductsCounter);
      })
    );
  }



  loadMoreItems(): void {
    this.wishListProductsCounter += this.wishListProductsCounter;
    this.currentWishListProducts = this.calculateCurrentWistList(this.wishListProducts, this.wishListProductsCounter);
    this.wishListLoadMoreFlag = this.checkViewMoreProductsAmount(this.wishListProducts, this.wishListProductsCounter);
  }

  calculateCurrentWistList(wishList: IArrivals[], wishListProductsCounter: number): IArrivals[] {
    return wishList.slice(0, wishListProductsCounter);
  }

  checkViewMoreProductsAmount(wishList: IArrivals[], wishListProductsCounter: number): boolean {
    return wishList.length > wishListProductsCounter;
  }
}
