import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { of } from 'rxjs';
import { Receipt } from '../models/receipt';
import { ReceiptFilter } from '../models/receipt-filter';

@Injectable()
export class ReceiptService {
    constructor(private db: AngularFireDatabase) {
    }

    get(filter: ReceiptFilter): AngularFireList<Receipt> {
        return this.db.list('/receipts', ref => ref.orderByChild('year').equalTo(filter.year));
    }

    save(receipt: Receipt) {
      const ref = this.db.list('/receipts').push({...receipt});

      const updatedReceipt: Receipt = {...receipt, id: ref.key };

      return of(updatedReceipt);
    }
}
