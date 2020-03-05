import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IAdvInternal } from '../interfaces/adv-internal.interface';
import { advertisementsURL } from '../api-endpoints';

@Injectable({
  providedIn: 'root',
})
export class AdvertisementsService {
  constructor(private readonly http: HttpClient) {}

  public getAdvertisments(): Observable<IAdvInternal[]> {
    return this.http.get<IAdvInternal[]>(advertisementsURL);
  }
}
