import { Action } from '@ngrx/store';
import { DropDownEntry } from '../../shared/models/dropdown-entry';
import { ReceiptFilter } from '../models/receipt-filter';
import { Receipt } from '../models/receipt';
import { ReceiptSummary } from '../models/receipt-summary';

export enum ReceiptSummaryActionTypes {
    GetMonths = '[Receipt Summary] Get Months',
    GetYears = '[Receipt Summary] Get Years',
    GetYearsComplete = '[Receipt Summary] Get Years Complete',
    UpdateFilter = '[Receipt Summary] Update Filter',
    CalculateTotal = '[Receipt Summary] Calculate Total',
    CalculateTotalComplete = '[Receipt Summary] Calculate Total Complete',
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

export class CalculateTotal implements Action {
    readonly type = ReceiptSummaryActionTypes.CalculateTotal;
    constructor(public payload: Receipt[]) {}
}

export class CalculateTotalComplete implements Action {
    readonly type = ReceiptSummaryActionTypes.CalculateTotalComplete;
    constructor(public payload: ReceiptSummary) {}
}

export type ReceiptSummaryActions =
    GetMonths |
    GetYears |
    GetYearsComplete |
    UpdateFilter |
    CalculateTotal |
    CalculateTotalComplete;
