import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';
import { tap, map, exhaustMap, switchMap, catchError } from 'rxjs/operators';
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
import { AngularFireList } from 'angularfire2/database';

@Injectable()
export class ReceiptEffects {
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
      switchMap(payload => this.receiptService.get(payload).snapshotChanges()),
      map((data) => {
        const receipts: Array<Receipt> = [];
        data.map(x => {
              receipts.push({...x.payload.val(), id: x.key});
          });
        return new GetReceiptsComplete(receipts);
    }));

  constructor(
    private actions$: Actions,
    private receiptService: ReceiptService,
    private router: Router,
    private notification: MatSnackBar,
  ) { }
}
