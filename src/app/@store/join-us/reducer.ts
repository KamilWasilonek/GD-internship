import * as fromJoinUsActions from './actions';
import { SubscriptionResponse } from '@app/shared/interfaces/subscription-response.interface';

export interface JoinUsState {
  serverResponse: SubscriptionResponse;
}

export const initialState = {
  serverResponse: {
    message: '',
    isError: false,
  },
};

export function reducer(state = initialState, action: fromJoinUsActions.JoinUsActions): JoinUsState {
  switch (action.type) {
    case fromJoinUsActions.JOIN_USER_RESPONSE: {
      const serverResponse = action.payload;

      return {
        ...state,
        serverResponse,
      };
    }

    default:
      return state;
  }
}
