import { Component, OnInit, AfterViewChecked, AfterContentChecked } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, delay } from 'rxjs/operators';
import { ProductDetailsService } from '@app/shared/services/product-details.service';
import { IProductDetails } from '@app/shared/interfaces/product-detail/product-datails.interface';
import { IProductDescription } from '@app/shared/interfaces/product-detail/product-description.interface';
import { IProductOptions } from '@app/shared/interfaces/product-detail/product-options.interface';

@Component({
  selector: 'app-product-details-page',
  templateUrl: './product-details-page.component.html',
  styleUrls: ['./product-details-page.component.scss'],
})
export class ProductDetailsPageComponent implements AfterViewChecked {
  id: Observable<string>;
  productDetails: IProductDetails;
  productDescription: IProductDescription;
  productOptions: IProductOptions;
  isDataLoading = true;
  childComponentsLoadingStatus = {
    gallery: false,
    description: false,
    options: false,
    addTOCart: false,
  };

  spinnerMessage = {
    message: 'Loading product details',
    isError: false,
  };

  constructor(private route: ActivatedRoute, private productDetailsService: ProductDetailsService) {
    this.id = route.params.pipe(map(params => params.id));

    this.productDetailsService
      .getProductDetails()
      .pipe(delay(2000))
      .subscribe(
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
        error => {
          console.log('Loading error.');
        },
        () => {
          this.isDataLoading = false;
        }
      );
  }

  checkChildStatus() {
    console.log(this.childComponentsLoadingStatus);
    console.log(
      Object.values(this.childComponentsLoadingStatus).every(value => {
        return value === true;
      })
    );
  }

  changeGalleryStatus(status: boolean) {
    this.childComponentsLoadingStatus.gallery = status;
  }

  ngAfterViewChecked() {
    this.checkChildStatus();
  }
}
