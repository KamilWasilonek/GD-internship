import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Advertisment } from '../interfaces/adv.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdvService {
  constructor(private http: HttpClient) {}

  public getAdv(): Observable<Advertisment[]> {
    return this.http.get<Advertisment[]>('../../../assets/mocks/adv.json');
  }
}
