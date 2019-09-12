import { Component, Input, OnInit } from '@angular/core';
import { ProductStateService } from '@app/shared/services/product-details/product-state.service';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.scss'],
})
export class AddToCartComponent implements OnInit {
  @Input() productPrice: number;

  constructor(private stateService: ProductStateService) {}

  ngOnInit() {
    if (this.productPrice) {
      this.stateService.changeAddToCartState(true);
    }
  }
}
