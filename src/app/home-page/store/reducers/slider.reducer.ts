import * as fromSlider from '../actions/slider.actions';
import { ISlide } from '@app/shared/interfaces/banner.interface';

export interface SliderState {
  data: ISlide[];
  isError: boolean;
  isLoaded: boolean;
}

export const initialState: SliderState = {
  data: [],
  isError: false,
  isLoaded: false,
};

export function reducer(state = initialState, action: fromSlider.SliderAction): SliderState {
  switch (action.type) {
    case fromSlider.LOAD_SLIDER: {
      return {
        ...state,
      };
    }

    case fromSlider.LOAD_SLIDER_SUCCESS: {
      const data = action.payload;

      return {
        ...state,
        data,
        isLoaded: true,
        isError: false,
      };
    }

    case fromSlider.LOAD_SLIDER_FAIL: {
      return {
        ...state,
        isError: true,
        isLoaded: false,
      };
    }

    default: {
      return state;
    }
  }
}

export const getSlider = (state: SliderState) => state;
