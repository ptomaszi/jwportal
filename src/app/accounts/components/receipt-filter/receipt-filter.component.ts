import { Component, Input, EventEmitter, Output, OnInit } from '@angular/core';
import { DropDownEntry } from '../../../shared/models/dropdown-entry';
import { ReceiptFilter } from '../../models/receipt-filter';

@Component({
    selector: 'app-receipt-filter',
    templateUrl: './receipt-filter.component.html'
})
export class ReceiptFilterComponent implements OnInit {
    month: number;
    year: number;

    @Input() years: Array<DropDownEntry>;
    @Input() months: Array<DropDownEntry>;
    @Input() filter: ReceiptFilter;
    @Output() search = new EventEmitter<ReceiptFilter>();

    ngOnInit() {
        this.month = this.filter.month;
        this.year = this.filter.year;
    }

    performSearch() {
        this.search.emit({month: this.month, year: this.year});
    }
}
