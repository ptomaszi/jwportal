import { Component, Output, Input, EventEmitter } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

import { Receipt } from '../../models/receipt';

@Component({
    selector: 'app-add-receipt',
    templateUrl: './add-receipt.component.html'
})
export class AddReceiptComponent {
    form: FormGroup;

    @Input() receipt: Receipt;
    @Output() add = new EventEmitter<Receipt>();

    constructor(private formBuilder: FormBuilder) {
        this.createForm();
    }

    createForm() {
        this.form = this.formBuilder.group({
            date: new Date(),
            congregation: '',
            worldWide: '',
            branch: '',
            other: ''
        });
    }

    saveReceipt() {
        const receipt: Receipt = {
            id: '0',
            day: new Date(this.form.get('date').value).getDate(),
            month: new Date(this.form.get('date').value).getMonth() + 1,
            year: new Date(this.form.get('date').value).getFullYear(),
            branch: this.form.get('branch').value,
            congregation: this.form.get('congregation').value,
            worldWide : this.form.get('worldWide').value,
            other: this.form.get('other').value,
        };
        this.add.emit(receipt);
    }
}
