import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { map } from 'rxjs/operators';
import { ReceiptSummaryService } from '../services/receipt-summary.service';
import {
  GetYears,
  GetYearsComplete,
  ReceiptSummaryActionTypes,
  CalculateTotal,
  CalculateTotalComplete
} from '../actions/receipt-summary';

@Injectable()
export class ReceiptSummaryEffects {
  @Effect()
  getYears$ = this.actions$.pipe(
    ofType(ReceiptSummaryActionTypes.GetYears),
    map((action: GetYears) => {
      const years = this.receiptSummaryService.getYears();
      return new GetYearsComplete(years);
    }));

  @Effect()
  calculateTotal$ = this.actions$.pipe(
    ofType(ReceiptSummaryActionTypes.CalculateTotal),
    map((action: CalculateTotal) => {
     const summary = this.receiptSummaryService.calculateTotal(action.payload);
     return new CalculateTotalComplete(summary);
    })
  );

  constructor(
    private actions$: Actions,
    private receiptSummaryService: ReceiptSummaryService,
  ) {
  }
}
