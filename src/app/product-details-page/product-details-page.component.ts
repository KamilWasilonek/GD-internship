import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, combineLatest } from 'rxjs';
import { map, pluck, tap } from 'rxjs/operators';
import { Store, select } from '@ngrx/store';

import { IProductDetails } from '@app/shared/interfaces/product-detail/product-datails.interface';
import { IProductDescription } from '@app/shared/interfaces/product-detail/product-description.interface';
import { IProductOptions } from '@app/shared/interfaces/product-detail/product-options.interface';
import { IArrivals } from '@app/shared/interfaces/arrivals.interface';
import { Spinner } from '@app/shared/interfaces/spinner.interface';
import { ArrivalsService } from '@app/shared/services/arrivals.service';
import * as fromStore from '../product-list-page/store';
import * as fromProductDetails from '../product-list-page/store/product-details';
import { IProductAddToCard } from '@app/shared/interfaces/product-detail/product-add-to-card.interface';

@Component({
  selector: 'app-product-details-page',
  templateUrl: './product-details-page.component.html',
  styleUrls: ['./product-details-page.component.scss'],
})
export class ProductDetailsPageComponent {
  public id: Observable<string>;
  public productDetails: Observable<IProductDetails>;
  public productDescription: Observable<IProductDescription>;
  public productOptions: Observable<IProductOptions>;
  public productAddToCard: Observable<IProductAddToCard>;
  public dataLoadingStatus: Observable<boolean>;
  public isDataLoaded: Observable<boolean>;

  public spinnerMessage: Spinner = {
    message: 'Loading product details',
    isError: false,
  };
  public products: Observable<IArrivals[]>;
  public flags = {
    isArrivalsVisible: true,
  };

  constructor(
    private readonly route: ActivatedRoute,
    private readonly store: Store<fromStore.ProductsState>,
    private readonly arrivalsService: ArrivalsService
  ) {
    this.id = this.route.params.pipe(map(params => params.id));
    this.store.dispatch(new fromProductDetails.LoadProductDetailsAction());
    this.getDataLoadingStatus();
    this.getProducts();
    this.getProductDetails();
    this.getProductDescription();
    this.getProductOptions();
    this.getProductAddToCard();
    this.isDataLoaded = combineLatest([this.dataLoadingStatus, this.productDetails]).pipe(map(([loaded]) => loaded));
  }

  private getProducts(): void {
    this.products = this.arrivalsService.getArrivals().pipe(pluck('products'));
  }

  private getProductDetails(): void {
    this.productDetails = this.store.pipe(
      select(fromProductDetails.selectState),
      tap(product => {
        if (product.isFailed) {
          this.spinnerMessage = {
            message: 'Can not load product details',
            isError: true,
          };
        }
      }),
      map<fromProductDetails.ProductDetailsState, IProductDetails>(product => product.data)
    );
  }

  private getProductDescription(): void {
    this.productDescription = this.store.pipe(select(fromProductDetails.selectDescription));
  }

  private getProductOptions(): void {
    this.productOptions = this.store.pipe(select(fromProductDetails.selectOptions));
  }

  private getProductAddToCard(): void {
    this.productAddToCard = this.store.pipe(select(fromProductDetails.selectAddToCard));
  }

  private getDataLoadingStatus(): void {
    this.dataLoadingStatus = this.store.pipe(select(fromProductDetails.selectDataLoadingStatus));
  }
}
