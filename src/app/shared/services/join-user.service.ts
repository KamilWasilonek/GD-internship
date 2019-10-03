import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';

import { subscriptionsURL } from '../api-endpoints';
import { UserSubscription } from '../interfaces/user-subscription.interface';
import { SubscriptionResponse } from '../interfaces/subscription-response.interface';

@Injectable({
  providedIn: 'root',
})
export class JoinUserService {
  public linkIsClicked = new Subject<boolean>();

  constructor(private readonly http: HttpClient) {}

  public createSubscription(userSubscription: UserSubscription): Observable<SubscriptionResponse> {
    return this.http.post<SubscriptionResponse>(subscriptionsURL, userSubscription);
  }

  sendClick(): void {
    this.linkIsClicked.next();
  }
}
