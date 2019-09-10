import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IBestsellerItem } from '../../shared/interfaces/bestseller-item.interface';
import { bestsellersURL } from '../api-endpoints';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BestsellersService {
  constructor(private http: HttpClient) {}

  public getBestsellers(): Observable<{ products: IBestsellerItem[] }> {
    return this.http.get<{ products: IBestsellerItem[] }>(bestsellersURL);
  }
}
