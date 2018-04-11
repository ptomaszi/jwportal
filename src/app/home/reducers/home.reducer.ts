import { Action } from '@ngrx/store';
import { HomeActions, HomeActionTypes } from '../actions/home.actions';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

export interface State {
  info: string;
}

export const initialState: State = {
  info: 'Hello World'
};

export function reducer(state = initialState, action: HomeActions): State {
  switch (action.type) {

    case HomeActionTypes.GetInfo:
      return state;

    default:
      return state;
  }
}

export const getInfo = (state: State) => state.info;
