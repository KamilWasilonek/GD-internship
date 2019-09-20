import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IAdvertisment } from '../interfaces/adv.interface';
import { advertismentsURL } from '../api-endpoints';

@Injectable({
  providedIn: 'root',
})

export class AdvertismentsService {
  constructor(private readonly http: HttpClient) {}

  public getAdvertisments(): Observable<IAdvertisment[]> {
    return this.http.get<IAdvertisment[]>(advertismentsURL);
  }
}
