import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Receipt } from '../../models/receipt';
import * as fromReceipt from '../../reducers';
import * as receiptActions from '../../actions/receipt';
import * as receiptSummaryActions from '../../actions/receipt-summary';
import { DropDownEntry } from '../../../shared/models/dropdown-entry';
import { ReceiptFilter } from '../../models/receipt-filter';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  $receipt: Observable<Receipt>;
  $receipts: Observable<Array<Receipt>>;
  $years: Observable<DropDownEntry[]>;
  $months: Observable<DropDownEntry[]>;
  $filter: Observable<ReceiptFilter>;

  constructor(private store: Store<fromReceipt.State>) {
    this.$receipt = store.pipe(select(fromReceipt.getReceiptToAdd));
    this.$months = store.pipe(select(fromReceipt.getMonths));
    this.$years = store.pipe(select(fromReceipt.getYears));
    this.$receipts = store.pipe(select(fromReceipt.getAllReceipts));
    this.$filter = store.pipe(select(fromReceipt.getFilter));
  }

  ngOnInit() {
    this.store.dispatch(new receiptSummaryActions.GetYears());
  }

  addReceipt(receipt: Receipt) {
    this.store.dispatch(new receiptActions.AddReceipt(receipt));
  }

  searchReceipts(filter: ReceiptFilter) {
    this.store.dispatch(new receiptSummaryActions.UpdateFilter(filter));
    this.store.dispatch(new receiptActions.GetReceipts(filter));
  }
}
