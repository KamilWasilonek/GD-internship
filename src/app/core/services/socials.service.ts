import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SocialsService {
  constructor(private http: HttpClient) {
  }

  public getSocialLinks(): Observable<any> {
    return this.http.get('../../../assets/config/social-links.json');
  }
}
