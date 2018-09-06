import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';
import { ReceiptService } from '../services/receipt.service';
import {
  AddReceipt,
  AddReceiptComplete,
  AddReceiptFailure,
  GetReceipts,
  GetReceiptsComplete,
  ReceiptActionTypes,
} from '../actions/receipt';
import { Receipt } from '../models/receipt';
import { ReceiptFilter } from '../models/receipt-filter';
import { CalculateTotal } from '../actions/receipt-summary';

@Injectable()
export class ReceiptEffects {
  filter: ReceiptFilter;
  @Effect()
  add$ = this.actions$.pipe(
    ofType(ReceiptActionTypes.AddReceipt),
    map((action: AddReceipt) => action.payload),
    switchMap((payload: Receipt) => {
      return this.receiptService.save(payload).pipe(
        map((data: Receipt) => {
          this.notification.open('Receipt saved', 'Close', {verticalPosition: 'top', duration: 3000});
          return new AddReceiptComplete(data);
      }
      ),
        catchError(error => of(new AddReceiptFailure(error)))
      );
    }));

    @Effect()
    get$ = this.actions$.pipe(
      ofType(ReceiptActionTypes.GetReceipts),
      map((action: GetReceipts) => action.payload),
      switchMap(payload => {
        this.filter = payload;
        return this.receiptService.get(payload).snapshotChanges();
      }),
      map((info) => {
        const receipts: Array<Receipt> = [];
        info.map(x => {
              receipts.push({...x.payload.val(), id: x.key});
          });
        return receipts.filter(x => x.month === this.filter.month);
      }
  ),
  switchMap(receipts => [
      new GetReceiptsComplete(receipts),
      new CalculateTotal(receipts)
  ])
);

  constructor(
    private actions$: Actions,
    private receiptService: ReceiptService,
    private notification: MatSnackBar,
  ) { }
}
