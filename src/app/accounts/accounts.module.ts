import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AccountComponent } from './containers/account/account.component';
import { MaterialModule } from '../material';

@NgModule({
  imports: [
      CommonModule,
      MaterialModule,
      RouterModule.forChild([{ path: '', component: AccountComponent }]),
    ],
  declarations: [ AccountComponent ]
})
export class AccountModule {}
