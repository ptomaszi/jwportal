import {
    createSelector,
    createFeatureSelector,
    ActionReducerMap,
  } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Receipt } from '../models/receipt';

import * as fromSummary from './receipt-summary';
import * as fromReceipt from './receipt';
import * as fromRoot from '../../reducers';
import { ReceiptFilter } from '../models/receipt-filter';

export interface ReceiptState {
    data: fromReceipt.State;
    summary: fromSummary.State;
}

export interface State extends fromRoot.State {
    receipts: ReceiptState;
}

export const reducers: ActionReducerMap<ReceiptState> = {
    data: fromReceipt.reducer,
    summary: fromSummary.reducer,
};

export const getReceiptState = createFeatureSelector<ReceiptState>('receipts');

export const getReceiptData = createSelector(getReceiptState, state => state.data);

export const getReceiptToAdd = createSelector(
    getReceiptState,
    state => state.data.receiptToAdd
);

export const getSummary = createSelector(
    getReceiptState,
    state => state.summary
);

export const getFilter = createSelector(getSummary, fromSummary.getFilter);

export const getAllReceipts = createSelector(
    getReceiptData,
    fromReceipt.getAllReceipts);

export const getFilteredReceipts = createSelector(
    getAllReceipts,
    getFilter,
    (receipts, filter) => {
        return receipts.filter(x => x.month === filter.month);
    }
);

export const getMonths = createSelector(getSummary, fromSummary.getMonths);
export const getYears = createSelector(getSummary, fromSummary.getYears);
