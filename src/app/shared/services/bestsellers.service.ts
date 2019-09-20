import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IBestsellerItem } from '../../shared/interfaces/bestseller-item.interface';
import { bestsellersURL } from '../api-endpoints';

@Injectable({
  providedIn: 'root',
})
export class BestsellersService {
  constructor(private readonly http: HttpClient) {}

  public getBestsellers(): Observable<{ products: IBestsellerItem[] }> {
    return this.http.get<{ products: IBestsellerItem[] }>(bestsellersURL);
  }
}
