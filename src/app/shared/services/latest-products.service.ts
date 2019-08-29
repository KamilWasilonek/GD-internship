import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Slide } from '@app/shared/interfaces/banner.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class LatestProductsService {
  constructor(private http: HttpClient) {}

  public getSlides(): Observable<Slide[]> {
    return this.http.get<Slide[]>('../../../assets/mocks/latest-products.json');
  }
}
