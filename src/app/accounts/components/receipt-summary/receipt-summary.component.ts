import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { DropDownEntry } from '../../../shared/models/dropdown-entry';
import { Receipt } from '../../models/receipt';
import { ReceiptFilter } from '../../models/receipt-filter';

@Component({
    selector: 'app-receipt-summary',
    templateUrl: './receipt-summary.component.html',
    styles: ['mat-card {margin: 15px;} .total {position: absolute; right:0} .total-text {margin-bottom: 50px;}']
})
export class ReceiptSummaryComponent implements OnInit {
    month: number;
    year: number;
    @Input() receipts: Array<Receipt>;
    @Input() years: Array<DropDownEntry>;
    @Input() months: Array<DropDownEntry>;
    @Input() filter: ReceiptFilter;
    @Output() search = new EventEmitter<ReceiptFilter>();

    constructor() {
    }

    ngOnInit() {
        this.month = this.filter.month;
        this.year = this.filter.year;
    }

    performSearch() {
        this.search.emit({month: this.month, year: this.year});
    }
}
