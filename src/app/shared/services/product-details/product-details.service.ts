import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProductDetails } from '../../interfaces/product-detail/product-datails.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductDetailsService {
  constructor(private http: HttpClient) {}

  public getProductDetails(): Observable<IProductDetails> {
    return this.http.get<IProductDetails>('http://localhost:3000/api/products/1');
  }
}
