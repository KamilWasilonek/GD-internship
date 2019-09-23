import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

import { IProductDetails } from '@app/shared/interfaces/product-detail/product-datails.interface';
import { IProductDescription } from '@app/shared/interfaces/product-detail/product-description.interface';
import { IProductOptions } from '@app/shared/interfaces/product-detail/product-options.interface';
import { ProductDetailsService } from '@app/shared/services/product-details/product-details.service';
import { ProductStateService } from '@app/shared/services/product-details/product-state.service';

@Component({
  selector: 'app-product-details-page',
  templateUrl: './product-details-page.component.html',
  styleUrls: ['./product-details-page.component.scss'],
})
export class ProductDetailsPageComponent implements OnDestroy {
  id: Observable<string>;
  productDetails: IProductDetails;
  productDescription: IProductDescription;
  productOptions: IProductOptions;
  isDataLoading = true;
  loadingStateObserver: Subscription;

  spinnerMessage = {
    message: 'Loading product details',
    isError: false,
  };

  constructor(
    private readonly route: ActivatedRoute,
    private readonly productDetailsService: ProductDetailsService,
    private readonly stateService: ProductStateService
  ) {
    this.id = route.params.pipe(map(params => params.id));

    this.loadingStateObserver = this.stateService.currentState.subscribe(state => {
      this.isDataLoading = !state;
    });

    this.productDetailsService.getProductDetails().subscribe(
      details => {
        this.productDetails = details;

        this.productDescription = {
          name: this.productDetails.name,
          title: this.productDetails.title,
          description: this.productDetails.description,
        };
        this.productOptions = {
          sizes: this.productDetails.sizes,
          amountInStock: this.productDetails.amountInStock,
        };
      },
      _error => {
        console.log('Loading error.');
      }
    );
  }

  ngOnDestroy(): void {
    if (this.loadingStateObserver) {
      this.loadingStateObserver.unsubscribe();
    }
  }
}
