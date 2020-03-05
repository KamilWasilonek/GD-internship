import { Action } from '@ngrx/store';

import { UserSubscription } from '@app/shared/interfaces/user-subscription.interface';
import { SubscriptionResponse } from '@app/shared/interfaces/subscription-response.interface';

export const JOIN_USER = '[Join-us] Join User';
export const JOIN_USER_RESPONSE = '[Join-us] Join User Response';

export class JoinUserAction implements Action {
  readonly type = JOIN_USER;

  constructor(public readonly payload: UserSubscription) {}
}

export class JoinUserResponseAction implements Action {
  readonly type = JOIN_USER_RESPONSE;

  constructor(public readonly payload: SubscriptionResponse) {}
}

export type JoinUsActions = JoinUserAction | JoinUserResponseAction;
