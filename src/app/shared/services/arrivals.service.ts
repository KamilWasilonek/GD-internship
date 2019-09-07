import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IArrivals } from '../interfaces/arrivals.interface';
import { newArrivalsURL } from '../api-endpoints';

@Injectable({
  providedIn: 'root',
})
export class ArrivalsService {
  constructor(private http: HttpClient) {}
  public getArrivals(): Observable<{ products: IArrivals[] }> {
    return this.http.get<{ products: IArrivals[] }>(newArrivalsURL);
  }
}
