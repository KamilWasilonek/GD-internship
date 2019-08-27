import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Slide } from '@app/shared/interfaces/banner.interface';

@Injectable({
  providedIn: 'root',
})
export class BannerService {
  constructor(private http: HttpClient) {}

  public getSlides(): Observable<Slide[]> {
    return this.http.get<Slide[]>('../../../assets/mocks/slideshow.json');
  }
}
