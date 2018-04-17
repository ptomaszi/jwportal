import { Action } from '@ngrx/store';
import { Receipt } from '../models/receipt';
import { ReceiptFilter } from '../models/receipt-filter';

export enum ReceiptActionTypes {
    GetReceipts = '[Receipt] Get Receipts',
    GetReceiptsComplete = '[Receipt] Get Receipts Complete',
    AddReceipt = '[Receipt] Add Receipt',
    AddReceiptComplete = '[Receipt] Add Complete',
    AddReceiptFailure = '[Receipt] Add Failure',
}

export class GetReceipts implements Action {
    readonly type = ReceiptActionTypes.GetReceipts;
    constructor(public payload: ReceiptFilter) {}
}

export class GetReceiptsComplete implements Action {
    readonly type = ReceiptActionTypes.GetReceiptsComplete;
    constructor(public payload: Receipt[]) {}
}

export class AddReceipt implements Action {
    readonly type = ReceiptActionTypes.AddReceipt;
    constructor(public payload: Receipt) {}
}

export class AddReceiptComplete implements Action {
    readonly type = ReceiptActionTypes.AddReceiptComplete;
    constructor(public payload: Receipt) {}
}

export class AddReceiptFailure implements Action {
    readonly type = ReceiptActionTypes.AddReceiptFailure;
    constructor(public payload: any) {}
}

export type ReceiptActions = GetReceipts | GetReceiptsComplete | AddReceipt | AddReceiptComplete | AddReceiptFailure;
