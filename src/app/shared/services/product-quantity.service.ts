import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { IOrder } from '../interfaces/product-detail/ordered-product.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductQuantityService {
  private orderDetails = {
    size: 'S',
    quantity: 1,
  };

  currentOrderDetails = new Subject<IOrder>();

  getOrderDetails(): Observable<IOrder> {
    return this.currentOrderDetails.asObservable();
  }

  changeOrderSize(size: string): void {
    this.orderDetails.size = size;
    this.currentOrderDetails.next(this.orderDetails);
  }

  changeOrderQuantity(quantity: number): void {
    this.orderDetails.quantity = quantity;
    this.currentOrderDetails.next(this.orderDetails);
  }
}
