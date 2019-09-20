import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';
import { subscriptionsURL } from '../api-endpoints';
import { UserSubscription } from '@core/components/join-us/user-subscription';

@Injectable({
  providedIn: 'root',
})
export class JoinUserService {
  public linkIsClicked = new Subject<boolean>();

  constructor(private readonly http: HttpClient) {}

  public createSubscription(userSubscription: UserSubscription): Observable<UserSubscription> {
    return this.http.post<UserSubscription>(subscriptionsURL, userSubscription);
  }

  sendClick(): void {
    this.linkIsClicked.next();
  }
}
