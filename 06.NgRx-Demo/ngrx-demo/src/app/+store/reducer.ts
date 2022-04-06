import { createReducer, on } from '@ngrx/store';
import { incrementCounter, setValue } from './actions';

export interface IGlobalState {
  counter: number;
  value: any;
}

const initialState: IGlobalState = {
  counter: 0,
  value: null,
};

export const scoreboardReducer = createReducer(
  initialState,
  on(incrementCounter, (state) => ({ ...state, counter: state.counter + 1 })),
  on(setValue, (state, { value }) => ({ ...state, value }))
);
