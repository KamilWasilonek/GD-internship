import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProductDetails } from '../../interfaces/product-detail/product-datails.interface';
import { productDetailsURL } from '@app/shared/api-endpoints';

@Injectable({
  providedIn: 'root',
})
export class ProductDetailsService {
  constructor(private http: HttpClient) {}

  public getProductDetails(): Observable<IProductDetails> {
    return this.http.get<IProductDetails>(productDetailsURL);
  }
}
