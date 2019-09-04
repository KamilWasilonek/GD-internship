import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IBestsellerItem } from '../../shared/interfaces/bestseller-item.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  public getProducts(): Observable<IBestsellerItem[]> {
    return this.http.get<IBestsellerItem[]>('../../../assets/mocks/products.json');
  }
}
