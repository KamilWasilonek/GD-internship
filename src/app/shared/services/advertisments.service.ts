import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { advertismentsURL } from '../api-endpoints';
import { IAdvInternal } from '../interfaces/adv-internal.interface';

@Injectable({
  providedIn: 'root',
})
export class AdvertismentsService {
  constructor(private readonly http: HttpClient) {}

  public getAdvertisments(): Observable<IAdvInternal[]> {
    return this.http.get<IAdvInternal[]>(advertismentsURL);
  }
}
