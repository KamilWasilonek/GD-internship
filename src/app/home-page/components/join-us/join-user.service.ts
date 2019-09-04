import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserSubscription } from './user-subscription';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class JoinUserService {
  // apiURL = 'https://project-angular-gd.herokuapp.com/api';
  apiURL = 'http://localhost:3000/api';

  public linkWasClicked = false;
  public linkIsClicked = new Subject<boolean>();

  constructor(private http: HttpClient) {}

  public createSubscription(userSubscription: UserSubscription) {
    return this.http.post(`${this.apiURL}/subscriptions`, userSubscription);
  }
  sendClick() {
    return this.linkIsClicked.next((this.linkWasClicked = true));
  }
  receiveClick() {
    return this.linkWasClicked;
  }
}
