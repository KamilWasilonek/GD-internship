import { ISlide } from '@app/shared/interfaces/banner.interface';
import * as sliderActions from './actions';

export interface SliderState {
  data: ISlide[];
  isFailed: boolean;
}

export const initialSliderState: SliderState = {
  data: [],
  isFailed: undefined,
};

export function reducer(state = initialSliderState, action: sliderActions.SliderAction): SliderState {
  switch (action.type) {
    case sliderActions.LOAD_SLIDER_SUCCESS: {
      const data = action.payload;

      return {
        ...state,
        data,
        isFailed: false,
      };
    }

    case sliderActions.LOAD_SLIDER_FAIL: {
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
