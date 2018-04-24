import { createSelector } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Receipt } from '../models/receipt';
import { ReceiptSummaryActions, ReceiptSummaryActionTypes } from '../actions/receipt-summary';
import { DropDownEntry } from '../../shared/models/dropdown-entry';
import { ReceiptFilter } from '../models/receipt-filter';
import { ReceiptSummary } from '../models/receipt-summary';

export interface State {
    months: Array<DropDownEntry>;
    years: Array<DropDownEntry>;
    filter: ReceiptFilter;
    calculations: ReceiptSummary;
}

export const initialState: State = {
    filter: {month: new Date().getMonth() + 1, year: new Date().getFullYear()},
    years: [],
    months: [
        {value: 1, viewValue: 'January'},
        {value: 2, viewValue: 'February'},
        {value: 3, viewValue: 'March'},
        {value: 4, viewValue: 'April'},
        {value: 5, viewValue: 'May'},
        {value: 6, viewValue: 'June'},
        {value: 7, viewValue: 'July'},
        {value: 8, viewValue: 'August'},
        {value: 9, viewValue: 'September'},
        {value: 10, viewValue: 'October'},
        {value: 11, viewValue: 'November'},
        {value: 12, viewValue: 'December'},
    ],
    calculations: {total: 0, totalCongregation: 0, totalWorldWide: 0, totalOther: 0, totalBranch: 0}
};

export function reducer(state = initialState, action: ReceiptSummaryActions): State {
    switch (action.type) {
        case ReceiptSummaryActionTypes.UpdateFilter: {
            return {...state, filter: action.payload};
        }
        case ReceiptSummaryActionTypes.GetYearsComplete: {
            return {...state,  years: action.payload};
        }
        case ReceiptSummaryActionTypes.CalculateTotalComplete: {
            return {...state, calculations: action.payload};
        }
        default: {
            return state;
        }
    }
}

export const getYears = (state: State) => state.years;
export const getMonths = (state: State) => state.months;
export const getFilter = (state: State) => state.filter;
export const getCalculations = (state: State) => state.calculations;
