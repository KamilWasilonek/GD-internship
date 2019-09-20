import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { IOrder } from '@app/shared/interfaces/product-detail/ordered-product.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductOrderService {
  private readonly orderDetails = {
    size: 'S',
    quantity: 0,
  };

  private readonly currentOrderDetails = new BehaviorSubject<IOrder>(this.orderDetails);

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
