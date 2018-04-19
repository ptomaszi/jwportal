import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { DropDownEntry } from '../../../shared/models/dropdown-entry';
import { Receipt } from '../../models/receipt';
import { ReceiptFilter } from '../../models/receipt-filter';

@Component({
    selector: 'app-receipt-summary',
    templateUrl: './receipt-summary.component.html',
    styles: [
        `mat-card {
            margin: 15px;
            width: 20%;
            display: inline-block;
        }
        .total {
            position: absolute;
            right:0
        }
        .total-text {margin-bottom: 50px;}`
        ]
})
export class ReceiptSummaryComponent {
    @Input() receipts: Array<Receipt>;
    @Input() years: Array<DropDownEntry>;
    @Input() months: Array<DropDownEntry>;
    @Input() filter: ReceiptFilter;
    @Output() search = new EventEmitter<ReceiptFilter>();

    constructor() {
    }

    performSearch(filter: ReceiptFilter) {
        this.search.emit(filter);
    }
}
