import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IArrivals } from '../interfaces/arrivals.interface';
import { loadWishListURL } from '../api-endpoints';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WishListService {
  constructor(private readonly http: HttpClient) {}

  public loadWishList(): Observable<IArrivals[]> {
    return this.http.get<IArrivals[]>(loadWishListURL);
  }
}
