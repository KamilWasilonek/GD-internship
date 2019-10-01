import { Component, OnInit } from '@angular/core';
import { IArrivals } from '@app/shared/interfaces/arrivals.interface';
import { IBestsellerItem } from '@app/shared/interfaces/bestseller-item.interface';
import { BestsellersService } from '@app/shared/services/bestsellers.service';
import * as fromStore from '../store';
import * as fromArrivals from '../store/new-arrivals';
import { Observable } from 'rxjs';
import { pluck, tap } from 'rxjs/operators';
import { Store, select } from '@ngrx/store';
import { Spinner } from '@app/shared/interfaces/spinner.interface';
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
  public productsState$: Observable<IArrivals[]>;
  public bestSalesProducts: Observable<IBestsellerItem[]>;
  public spinners: Spinner[] = [
    {
      message: 'Products are loading',
      isError: undefined,
    },
  ];

  constructor(private readonly store: Store<fromStore.HomePageState>, private readonly bestsellersService: BestsellersService) {}

  public ngOnInit(): void {
    this.productsState$ = this.store.pipe(
      select(fromArrivals.selectCombinedData),
      tap(arrivalsData => {
        if (!arrivalsData.length) {
          this.spinners[0] = {
            message: 'Can not load latest products',
            isError: true,
          };
        } else {
          this.spinners[0].isError = false;
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
