import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { subscriptionsURL } from '../api-endpoints';
import { UserSubscription } from '@core/components/join-us/user-subscription';

@Injectable({
  providedIn: 'root',
})
export class JoinUserService {
  // public linkWasClicked = false;
  public linkIsClicked = new Subject<boolean>();

  constructor(private http: HttpClient) {}

  public createSubscription(userSubscription: UserSubscription) {
    return this.http.post(subscriptionsURL, userSubscription);
  }
  sendClick() {
    return this.linkIsClicked.next();
  }
}
