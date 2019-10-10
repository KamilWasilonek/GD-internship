import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';

import { IProductOptions } from '@app/shared/interfaces/product-detail/product-options.interface';
import * as fromStore from '../../../product-list-page/store/';
import * as fromProductDetails from '../../../product-list-page/store/product-details';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.scss'],
})
export class OptionsComponent implements OnInit, OnChanges {
  @Input() productOptions: IProductOptions;
  @Output() readonly changeOption = new EventEmitter<string>();

  sizes: string[];
  productAmount: number;

  actualSize: string;
  prevActiveSizeElement: HTMLElement;

  actualAmount: number;
  isMinAmount = false;
  isMaxAmount = false;
  isProductAvailable: boolean;

  plusIcon = faPlus;
  minusIcon = faMinus;

  constructor(private readonly store: Store<fromStore.ProductsState>) {}

  ngOnInit(): void {
    if (!this.productOptions) {
      return;
    }
    this.store.dispatch(new fromProductDetails.SendLoadingStatusAction('options'));
  }

  ngOnChanges(): void {
    this.productAmount = this.productOptions.amountInStock;
    this.sizes = this.productOptions.sizes;
    this.actualSize = this.productOptions.choosenDetails.size;
    this.actualAmount = this.productOptions.choosenDetails.quantity;
    this.isProductAvailable = !!this.productAmount;

    this.isMinAmount = this.actualAmount === 1;
    this.isMaxAmount = this.actualAmount >= this.productAmount;
  }

  takeSize(size: string): void {
    this.changeOption.emit(size);
  }

  increaseAmount(): void {
    this.changeOption.emit('increase');
  }

  decreaseAmount(): void {
    this.changeOption.emit('decrease');
  }
}
