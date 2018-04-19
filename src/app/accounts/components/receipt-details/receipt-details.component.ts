import { Component, Input } from '@angular/core';
import { Receipt } from '../../models/receipt';
@Component({
    selector: 'app-receipt-details',
    templateUrl: './receipt-details.component.html'
})
export class ReceiptDetailsComponent {
    @Input() receipt: Receipt;
}
