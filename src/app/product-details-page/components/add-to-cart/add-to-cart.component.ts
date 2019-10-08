import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromStore from '../../../product-list-page/store/';
import * as fromProductDetails from '../../../product-list-page/store/product-details';
import { IProductAddToCard } from '@app/shared/interfaces/product-detail/product-add-to-card.interface';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.scss'],
})
export class AddToCartComponent implements OnInit, OnChanges {
  @Input() addToCard: IProductAddToCard;
  productPrice: number;
  productSize: string;
  totalProductAmount: number;
  totalProductPrice: number;

  constructor(private readonly store: Store<fromStore.ProductsState>) {}

  ngOnInit(): void {
    if (!this.addToCard) {
      return;
    }
    this.store.dispatch(new fromProductDetails.SendLoadingStatusAction('addToCart'));
  }

  ngOnChanges(): void {
    this.productPrice = this.addToCard.price;
    this.productSize = this.addToCard.choosenDetails.size;
    this.totalProductAmount = this.addToCard.choosenDetails.quantity;
    this.calculateTotalPrice();
  }

  calculateTotalPrice(): void {
    this.totalProductPrice = this.productPrice * this.totalProductAmount;
  }

  onBtnOrderClick(): void {
    console.log(
      `total price is: ${this.totalProductPrice}$, total amount is: ${this.totalProductAmount}, product size is: ${this.productSize}`
    );
  }
}
