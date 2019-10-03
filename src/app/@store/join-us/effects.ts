import { Injectable } from '@angular/core';
import { Actions, ofType, Effect } from '@ngrx/effects';

import { JoinUserService } from '@app/shared/services/join-user.service';
import * as fromJoinUsAction from './actions';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { SubscriptionResponse } from '@app/shared/interfaces/subscription-response.interface';

@Injectable()
export class JoinUsEffects {
  constructor(private readonly joinUsService: JoinUserService, private readonly actions$: Actions) {}

  @Effect() joinUser$ = this.actions$.pipe(
    ofType(fromJoinUsAction.JOIN_USER),
    map((action: fromJoinUsAction.JoinUserAction) => action.payload),
    mergeMap(action =>
      this.joinUsService.createSubscription(action).pipe(
        map((response: SubscriptionResponse) => new fromJoinUsAction.JoinUserResponseAction(response)),
        catchError((error: SubscriptionResponse) => of(new fromJoinUsAction.JoinUserResponseAction(error)))
      )
    )
  );
}
