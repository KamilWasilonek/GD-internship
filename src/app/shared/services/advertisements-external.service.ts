import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IAdvExternal } from '../interfaces/adv-external.interface';
import { advertismentExternalURL } from '../api-endpoints';

@Injectable({
  providedIn: 'root',
})
export class AdvertismentExternalService {
  constructor(private readonly http: HttpClient) {}

  public getAdvertismentExternal(): Observable<IAdvExternal[]> {
    return this.http.get<IAdvExternal[]>(advertismentExternalURL);
  }
}
