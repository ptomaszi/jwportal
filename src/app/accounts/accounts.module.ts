import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { MaterialModule } from '../material';

import { AccountComponent } from './containers/account/account.component';
import { AddReceiptComponent } from './components/add-receipt/add-receipt.component';
import { ReceiptSummaryComponent } from './components/receipt-summary/receipt-summary.component';

import { reducers } from './reducers';
import { ReceiptEffects } from './effects/receipt';
import { ReceiptSummaryEffects } from './effects/receipt-summary';
import { ReceiptService } from './services/receipt.service';
import { ReceiptSummaryService } from './services/receipt-summary.service';
import { ReceiptFilterComponent } from './components/receipt-filter/receipt-filter.component';
import { ReceiptDetailsComponent } from './components/receipt-details/receipt-details.component';

@NgModule({
  imports: [
      CommonModule,
      MaterialModule,
      RouterModule.forChild([{ path: '', component: AccountComponent }]),
      ReactiveFormsModule,
      StoreModule.forFeature('receipts', reducers),
      EffectsModule.forFeature([ReceiptEffects, ReceiptSummaryEffects]),
    ],
  declarations: [
    AccountComponent,
    AddReceiptComponent,
    ReceiptSummaryComponent,
    ReceiptFilterComponent,
    ReceiptDetailsComponent
  ],
  providers: [ReceiptService, ReceiptSummaryService]
})
export class AccountModule {}
