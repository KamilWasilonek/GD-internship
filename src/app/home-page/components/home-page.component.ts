import { Component, OnInit } from '@angular/core';
import { pluck, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { IArrivals } from '@app/shared/interfaces/arrivals.interface';
import { ArrivalsService } from '@app/shared/services/arrivals.service';
import { Store, select } from '@ngrx/store';
import * as fromStore from '../store';
import * as fromBestSales from '../store/best-sales';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  public flags = {
    isBannerVisible: true,
    isArrivalsVisible: true,
    isViewMoreVisible: true,
    isAdvertismentsVisible: true,
    isBestSalesVisible: true,
  };

  spinners = {
    arrivals: {
      message: 'Products are loading',
      isError: false,
    },
    bestSales: {
      message: 'Loading best sales products',
      isError: false,
    },
  };

  isSpinnerVisible = {
    arrivals: true,
    bestSales: true,
  };

  public products: Observable<IArrivals[]>;
  public bestSalesProductsState$: Observable<fromBestSales.BestSalesState>;

  constructor(private readonly arrivalsService: ArrivalsService, private readonly store: Store<fromStore.HomePageState>) {}

  public ngOnInit(): void {
    this.getProducts();
    this.bestSalesProductsState$ = this.store.pipe(
      select(fromBestSales.selectState),
      tap(bestSalesState => {
        if (bestSalesState.isLoadingFailed) {
          this.spinners.bestSales = {
            message: "Can't load best sales products",
            isError: true,
          };
        } else if (bestSalesState.data.length) {
          this.isSpinnerVisible.bestSales = false;
        }
      })
    );

    this.store.dispatch(new fromBestSales.LoadBestSalesProductsAction());
  }
  private getProducts(): void {
    this.products = this.arrivalsService.getArrivals().pipe(pluck('products'));
  }
}
