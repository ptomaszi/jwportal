import { Injectable } from '@angular/core';

@Injectable()
export class ReceiptSummaryService {
    constructor() {}
    getYears() {
        const years = [];
        const currentYear = new Date().getFullYear();
        for (let i = 7; i >= 1 ; i--) {
            const yearValue = currentYear - i;
            years.push({value: yearValue, viewValue: yearValue });
        }
        years.push({value: currentYear, viewValue: currentYear});
        for (let i = 1; i <= 7 ; i++) {
            const yearValue = currentYear + i;
            years.push({value: yearValue, viewValue: yearValue });
        }

        return years;
    }
}
