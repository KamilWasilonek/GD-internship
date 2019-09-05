import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ISlide } from '../interfaces/banner.interface';
import { slideshowURL } from '../api-endpoints';

@Injectable({
  providedIn: 'root',
})
export class SliderService {
  constructor(private http: HttpClient) {}

  public getSlideshow(): Observable<ISlide[]> {
    return this.http.get<ISlide[]>(slideshowURL);
  }
}
