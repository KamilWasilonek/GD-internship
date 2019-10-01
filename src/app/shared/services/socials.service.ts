import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ISocialIcon } from '@app/shared/interfaces/social-icon.interface';
import { socialsURL } from '../api-endpoints';

@Injectable({
  providedIn: 'root',
})
export class SocialsService {
  constructor(private readonly http: HttpClient) {}

  public getSocialIcons(): Observable<ISocialIcon[]> {
    return this.http.get<ISocialIcon[]>(socialsURL);
  }
}
