import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SocialIcon } from '@app/shared/interfaces/social-icon.interface';
import { socialsURL } from '../api-endpoints';

@Injectable({
  providedIn: 'root',
})
export class SocialsService {
  constructor(private readonly http: HttpClient) {}

  public getSocialLinks(): Observable<SocialIcon[]> {
    return this.http.get<SocialIcon[]>(socialsURL);
  }
}
