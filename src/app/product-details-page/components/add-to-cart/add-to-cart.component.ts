import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { ProductStateService } from '@app/shared/services/product-details/product-state.service';
import { ProductOrderService } from '@app/shared/services/product-details/product-order.service';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.scss'],
})
export class AddToCartComponent implements OnInit, OnDestroy {
  @Input() productPrice: number;
  productSize: string;
  totalProductAmount: number;
  totalProductPrice: number;
  subscription: Subscription;

  constructor(private readonly stateService: ProductStateService, private readonly orderService: ProductOrderService) {}

  ngOnInit(): void {
    if (!this.productPrice) {
      return;
    }
    this.stateService.changeAddToCartState(true);

    this.subscription = this.orderService.getOrderDetails().subscribe(data => {
      this.productSize = data.size;
      this.totalProductAmount = data.quantity;
      this.calculateTotalPrice();
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
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
