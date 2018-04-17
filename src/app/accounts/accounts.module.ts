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

@NgModule({
  imports: [
      CommonModule,
      MaterialModule,
      RouterModule.forChild([{ path: '', component: AccountComponent }]),
      ReactiveFormsModule,
      StoreModule.forFeature('receipts', reducers),
      EffectsModule.forFeature([ReceiptEffects, ReceiptSummaryEffects]),
    ],
  declarations: [ AccountComponent, AddReceiptComponent, ReceiptSummaryComponent ],
  providers: [ReceiptService, ReceiptSummaryService]
})
export class AccountModule {}
