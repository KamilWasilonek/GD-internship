import { IProductOptions } from '@app/shared/interfaces/product-detail/product-options.interface';
import { ProductStateService } from '@app/shared/services/product-details/product-state.service';
import { Component, OnInit, Input } from '@angular/core';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { ProductOrderService } from '@app/shared/services/product-details/product-order.service';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.scss'],
})
export class OptionsComponent implements OnInit {
  @Input() productOptions: IProductOptions;

  sizes: string[];
  productAmount: number;

  actualSize: string;
  prevActiveSizeElement: HTMLElement;

  actualAmount = 1;
  isMinAmount = false;
  isMaxAmount = false;
  isProductAvailable: boolean;

  plusIcon = faPlus;
  minusIcon = faMinus;

  constructor(private readonly stateService: ProductStateService, private readonly orderService: ProductOrderService) {}

  ngOnInit(): void {
    if (!this.productOptions) {
      return;
    }
    this.stateService.changeOptionsState(true);

    this.sizes = this.productOptions.sizes;
    this.actualSize = this.sizes[0];
    this.orderService.changeOrderSize(this.actualSize);

    this.productAmount = this.productOptions.amountInStock;

    if (this.productAmount !== 0) {
      this.orderService.changeOrderQuantity(this.actualAmount);
    }

    this.isProductAvailable = !!this.productAmount;

    if (this.productAmount === 1) {
      this.isMaxAmount = true;
    }
    this.isMinAmount = true;
  }

  takeSize(size: string): void {
    this.actualSize = size;
    this.orderService.changeOrderSize(this.actualSize);
  }

  increaseAmount(): void {
    this.actualAmount++;
    if (this.actualAmount === this.productAmount) {
      this.isMaxAmount = true;
    } else {
      this.isMinAmount = false;
    }
    this.orderService.changeOrderQuantity(this.actualAmount);
  }

  decreaseAmount(): void {
    this.actualAmount--;
    if (this.actualAmount === 1) {
      this.isMinAmount = true;
    } else {
      this.isMaxAmount = false;
    }
    this.orderService.changeOrderQuantity(this.actualAmount);
  }
}
