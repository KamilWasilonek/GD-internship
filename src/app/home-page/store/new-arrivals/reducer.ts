import { IArrivals } from '@app/shared/interfaces/arrivals.interface';
import * as arrivalsActions from './actions';

export interface ArrivalsState {
  data: IArrivals[];
  isFailed: boolean;
}

export const initialArrivalsState: ArrivalsState = {
  data: [],
  isFailed: undefined,
};

// tslint:disable-next-line: only-arrow-functions
export function reducer(state = initialArrivalsState, action: arrivalsActions.ArrivalsAction): ArrivalsState {
  switch (action.type) {
    case arrivalsActions.LOAD_ARRIVALS_SUCCESS: {
      const data = action.payload;

      return {
        ...state,
        data,
        isFailed: false,
      };
    }

    case arrivalsActions.LOAD_ARRIVALS_FAIL: {
      return {
        ...state,
        isFailed: true,
      };
    }

    default: {
      return state;
    }
  }
}
