import { Component, OnInit, Input, AfterViewInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.scss'],
})
export class AddToCartComponent implements AfterViewInit {
  @Input() productPrice: number;
  @Output() addToCartStatus = new EventEmitter<boolean>();

  constructor() {}

  ngAfterViewInit() {
    if (this.productPrice) {
      this.addToCartStatus.emit(true);
    }
  }
}
