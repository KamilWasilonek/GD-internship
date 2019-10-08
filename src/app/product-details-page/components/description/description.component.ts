import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { IProductDescription } from '@app/shared/interfaces/product-detail/product-description.interface';
import * as fromStore from '../../../product-list-page/store/';
import * as fromProductDetails from '../../../product-list-page/store/product-details';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss'],
})
export class DescriptionComponent implements OnInit {
  @Input() productDescription: IProductDescription;

  constructor(private readonly store: Store<fromStore.ProductsState>) {}

  ngOnInit(): void {
    if (!this.productDescription) {
      return;
    }
    this.store.dispatch(new fromProductDetails.SendLoadingStatusAction('description'));
  }
}
