import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';
import { tap, map, exhaustMap, switchMap, catchError } from 'rxjs/operators';
import { ReceiptSummaryService } from '../services/receipt-summary.service';
import {
  GetYears,
  GetYearsComplete,
  ReceiptSummaryActionTypes
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

  constructor(
    private actions$: Actions,
    private receiptSummaryService: ReceiptSummaryService,
    private router: Router,
    private notification: MatSnackBar,
  ) {
  }
}
