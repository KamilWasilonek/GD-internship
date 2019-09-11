import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductQuantity {
  orderProductQuantity = new Subject<number>();

  changeProductQuantity(amount: number) {
    this.orderProductQuantity.next(amount);
  }
}
