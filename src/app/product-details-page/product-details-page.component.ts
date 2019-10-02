import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription, combineLatest } from 'rxjs';
import { map, pluck } from 'rxjs/operators';
import { Store, select } from '@ngrx/store';

import { IProductDetails } from '@app/shared/interfaces/product-detail/product-datails.interface';
import { IProductDescription } from '@app/shared/interfaces/product-detail/product-description.interface';
import { IProductOptions } from '@app/shared/interfaces/product-detail/product-options.interface';
import { IArrivals } from '@app/shared/interfaces/arrivals.interface';
import { Spinner } from '@app/shared/interfaces/spinner.interface';
import { ArrivalsService } from '@app/shared/services/arrivals.service';
import { ProductStateService } from '@app/shared/services/product-details/product-state.service';
import * as fromStore from '../product-list-page/store';
import * as fromProductDetails from '../product-list-page/store/product-details';

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
  public isDataLoaded: Observable<boolean>;
  public loadingStateObserver: Subscription;

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
    private readonly stateService: ProductStateService,
    private readonly arrivalsService: ArrivalsService
  ) {
    this.id = route.params.pipe(map(params => params.id));
    this.getProducts();
    this.getProductDetails();
    this.getProductDescription();
    this.getProductOptions();
    this.isDataLoaded = combineLatest([this.stateService.currentState, this.productDetails]).pipe(map(([loaded]) => loaded));
    this.store.dispatch(new fromProductDetails.LoadProductDetailsAction());
  }

  private getProducts(): void {
    this.products = this.arrivalsService.getArrivals().pipe(pluck('products'));
  }
  private getProductDetails(): void {
    this.productDetails = this.store.pipe(
      select(fromProductDetails.selectState),
      map<fromProductDetails.ProductDetailsState, IProductDetails>(product => product.data)
    );
  }

  private getProductDescription(): void {
    this.productDescription = this.store.pipe(
      select(fromProductDetails.selectState),
      map<fromProductDetails.ProductDetailsState, IProductDescription>(product => {
        return {
          name: product.data.name,
          title: product.data.title,
          description: product.data.description,
        };
      })
    );
  }
  private getProductOptions(): void {
    this.productOptions = this.store.pipe(
      select(fromProductDetails.selectState),
      map<fromProductDetails.ProductDetailsState, IProductOptions>(product => {
        return {
          sizes: product.data.sizes,
          amountInStock: product.data.amountInStock,
        };
      })
    );
  }
}
