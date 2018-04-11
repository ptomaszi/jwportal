import {
    createSelector,
    createFeatureSelector,
    ActionReducerMap,
  } from '@ngrx/store';
  import * as fromRoot from '../../reducers';
  import * as fromHome from './home.reducer';

  export interface HomeState {
      info: fromHome.State;
  }

  export interface State extends fromRoot.State {
      home: HomeState;
  }

  export const reducers: ActionReducerMap<HomeState> = {
      info: fromHome.reducer,
  };

  export const selectHomeState = createFeatureSelector<HomeState>('home');

  export const getHomeInfo = createSelector(
      selectHomeState,
      (state: HomeState) => state.info.info
  );
