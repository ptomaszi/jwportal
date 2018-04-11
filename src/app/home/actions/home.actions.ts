import { Action } from '@ngrx/store';

export enum HomeActionTypes {
  GetInfo = '[Home] GetInfo'
}

export class GetInfo implements Action {
  readonly type = HomeActionTypes.GetInfo;
}

export type HomeActions = GetInfo;
