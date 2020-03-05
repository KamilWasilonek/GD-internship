import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { ProductStateService } from '@app/shared/services/product-details/product-state.service';
import { ProductOrderService } from '@app/shared/services/product-details/product-order.service';
import { Subscription } from 'rxjs';

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

  constructor(private stateService: ProductStateService, private orderService: ProductOrderService) {}

  ngOnInit() {
    if (this.productPrice) {
      this.stateService.changeAddToCartState(true);

      this.subscription = this.orderService.getOrderDetails().subscribe(data => {
        this.productSize = data.size;
        this.totalProductAmount = data.quantity;
        this.calculateTotalPrice();
      });
    }
  }

  calculateTotalPrice() {
    this.totalProductPrice = this.productPrice * this.totalProductAmount;
  }

  onBtnOrderClick() {
    console.log(
      `total price is: ${this.totalProductPrice}$, total amount is: ${this.totalProductAmount}, product size is: ${this.productSize}`
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
