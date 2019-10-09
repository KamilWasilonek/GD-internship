import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IAdvertisement } from '../interfaces/adv.interface';
import { advertisementsURL } from '../api-endpoints';

@Injectable({
  providedIn: 'root',
})
export class AdvertisementsService {
  constructor(private readonly http: HttpClient) {}

  public getAdvertisments(): Observable<IAdvertisement[]> {
    return this.http.get<IAdvertisement[]>(advertisementsURL);
  }
}
