import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { updateProductURL } from '../api-endpoints';
import { IArrivals } from '../interfaces/arrivals.interface';
import { ProductUpdate } from '../interfaces/product-update.interface';

@Injectable({
  providedIn: 'root',
})
export class UpdateProductService {
  constructor(private readonly http: HttpClient) {}

  public updateProduct(updatedProduct: ProductUpdate): Observable<IArrivals> {
    return this.http.patch<IArrivals>(updateProductURL, updatedProduct);
  }
}
