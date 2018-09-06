import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Receipt } from '../models/receipt';
import { ReceiptActions, ReceiptActionTypes } from '../actions/receipt';

export interface State extends EntityState<Receipt> {
    receiptToAdd: Receipt | null;
}

export const adapter: EntityAdapter<Receipt> = createEntityAdapter<Receipt>();

export const initialReceipt: Receipt = {
    id: '0',
    worldWide: 0,
    congregation: 0,
    branch: 0,
    other: 0,
    day: new Date().getDay(),
    month: new Date().getMonth(),
    year: new Date().getFullYear()
};

export const initialState: State = adapter.getInitialState({
    receiptToAdd: initialReceipt
});

export function reducer(state = initialState, action: ReceiptActions): State {
    switch (action.type) {
        case ReceiptActionTypes.GetReceiptsComplete: {
            return adapter.addAll(action.payload, state);
        }
        case ReceiptActionTypes.AddReceiptComplete: {
            return adapter.addOne(action.payload, {...state, receiptToAdd: Object.assign({}, initialReceipt)});
        }
        default: {
            return state;
        }
    }
}

export const {
    selectAll: getAllReceipts,
    selectEntities: getAllRecipientEntities
} = adapter.getSelectors();

export const getReceiptToAdd  = (state: State) => state.receiptToAdd;
