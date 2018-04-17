import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject, AngularFireList, DatabaseReference } from 'angularfire2/database';
import { of } from 'rxjs/observable/of';
import { Receipt } from '../models/receipt';
import { Observable } from 'rxjs/observable';
import { ReceiptFilter } from '../models/receipt-filter';

@Injectable()
export class ReceiptService {
    constructor(private db: AngularFireDatabase) {
    }

    get(filter: ReceiptFilter): AngularFireList<Receipt> {
        return this.db.list('/receipts', ref => ref.orderByChild('year').equalTo(filter.year));
    }

    save(receipt: Receipt) {
      const ref: DatabaseReference = this.db.list('/receipts').push({...receipt});

      const updatedReceipt: Receipt = {...receipt, id: ref.key };

      return of(updatedReceipt);
    }
}
