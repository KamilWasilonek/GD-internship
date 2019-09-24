import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription, combineLatest } from 'rxjs';
import { map, pluck } from 'rxjs/operators';
import { IProductDetails } from '@app/shared/interfaces/product-detail/product-datails.interface';
import { IProductDescription } from '@app/shared/interfaces/product-detail/product-description.interface';
import { IProductOptions } from '@app/shared/interfaces/product-detail/product-options.interface';
import { IArrivals } from '@app/shared/interfaces/arrivals.interface';
import { Spinner } from '@app/shared/interfaces/spinner.interface';
import { ArrivalsService } from '@app/shared/services/arrivals.service';
import { ProductDetailsService } from '@app/shared/services/product-details/product-details.service';
import { ProductStateService } from '@app/shared/services/product-details/product-state.service';
import { trackElement } from '@app/shared/functions/track-element';

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
  trackProducts = trackElement;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly productDetailsService: ProductDetailsService,
    private readonly stateService: ProductStateService,
    private readonly arrivalsService: ArrivalsService
  ) {
    this.id = route.params.pipe(map(params => params.id));
    this.getProducts();
    this.getProductDetails();
    this.getProductDescription();
    this.getProductOptions();
    this.isDataLoaded = combineLatest([this.stateService.currentState, this.productDetails]).pipe(map(([loaded]) => loaded));
  }

  private getProducts(): void {
    this.products = this.arrivalsService.getArrivals().pipe(pluck('products'));
  }
  private getProductDetails(): void {
    this.productDetails = this.productDetailsService.getProductDetails();
  }

  private getProductDescription(): void {
    this.productDescription = this.productDetailsService.getProductDetails().pipe(
      map<IProductDetails, IProductDescription>(products => {
        return {
          name: products.name,
          title: products.title,
          description: products.description,
        };
      })
    );
  }
  private getProductOptions(): void {
    this.productOptions = this.productDetailsService.getProductDetails().pipe(
      map<IProductDetails, IProductOptions>(({ sizes, amountInStock }) => {
        return {
          sizes,
          amountInStock,
        };
      })
    );
  }
}
