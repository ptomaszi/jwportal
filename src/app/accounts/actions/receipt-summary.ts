import { Action } from '@ngrx/store';
import { DropDownEntry } from '../../shared/models/dropdown-entry';
import { ReceiptFilter } from '../models/receipt-filter';

export enum ReceiptSummaryActionTypes {
    GetMonths = '[Receipt Summary] Get Months',
    GetYears = '[Receipt Summary] Get Years',
    GetYearsComplete = '[Receipt Summary] Get Years Complete',
    UpdateFilter = '[Receipt Summary] Update Filter'
}

export class GetMonths implements Action {
    readonly type = ReceiptSummaryActionTypes.GetMonths;
}

export class GetYears implements Action {
    readonly type = ReceiptSummaryActionTypes.GetYears;
}

export class GetYearsComplete implements Action {
    readonly type = ReceiptSummaryActionTypes.GetYearsComplete;
    constructor(public payload: Array<DropDownEntry>) {}
}

export class UpdateFilter implements Action {
    readonly type = ReceiptSummaryActionTypes.UpdateFilter;
    constructor(public payload: ReceiptFilter) {}
}

export type ReceiptSummaryActions = GetMonths | GetYears | GetYearsComplete | UpdateFilter;
