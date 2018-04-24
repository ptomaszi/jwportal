import { Injectable } from '@angular/core';
import { Receipt } from '../models/receipt';
import { ReceiptSummary } from '../models/receipt-summary';

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

    calculateTotal(receipts: Receipt[]) {
        const summary: ReceiptSummary = {total: 0, totalBranch: 0, totalCongregation: 0, totalOther: 0, totalWorldWide: 0};
        summary.totalWorldWide = receipts.reduce((acc, current) => acc + current.worldWide, 0);
        summary.totalCongregation = receipts.reduce((acc, current) => acc + current.congregation, 0);
        summary.totalBranch = receipts.reduce((acc, current) => acc + current.branch, 0);
        summary.totalOther = receipts.reduce((acc, current) => acc + current.other, 0);
        summary.total = summary.totalWorldWide + summary.totalCongregation + summary.totalBranch + summary.totalOther;
        return summary;
    }
}
