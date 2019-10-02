import { Component, OnInit } from '@angular/core';
import { IBestsellerItem } from '@app/shared/interfaces/bestseller-item.interface';
import { BestsellersService } from '@app/shared/services/bestsellers.service';
import * as fromStore from '../store';
import * as fromArrivals from '../store/new-arrivals';
import { Observable } from 'rxjs';
import { pluck, tap } from 'rxjs/operators';
import { Store, select } from '@ngrx/store';

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
  public productsState$: Observable<fromArrivals.ArrivalsState>;
  public bestSalesProducts: Observable<IBestsellerItem[]>;
  public spinners = {
    arrivals: {
      message: 'Products are loading',
      isError: false,
    },
  };
  isSpinnerVisible = {
    arrivals: true,
  };

  constructor(private readonly store: Store<fromStore.HomePageState>, private readonly bestsellersService: BestsellersService) {}

  public ngOnInit(): void {
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
    this.store.dispatch(new fromArrivals.LoadArrivalsAction());

    this.getBestSales();
  }

  private getBestSales(): void {
    this.bestSalesProducts = this.bestsellersService.getBestsellers().pipe(pluck('products'));
  }
}
