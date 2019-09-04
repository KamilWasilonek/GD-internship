import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IHomepage } from '../interfaces/homepage.interface';
import { homePageURL } from '../api-endpoints';

@Injectable({
  providedIn: 'root',
})
export class HomepageService {
  constructor(private http: HttpClient) {}

  public getHompageData(): Observable<IHomepage> {
    return this.http.get<IHomepage>(homePageURL);
  }
}
