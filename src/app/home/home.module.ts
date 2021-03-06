import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HomeComponent } from './containers/home.component';
import { MaterialModule } from '../material';

import { reducers } from './reducers';

@NgModule({
  imports: [
      CommonModule,
      MaterialModule,
      RouterModule.forChild([{ path: '', component: HomeComponent }]),
      StoreModule.forFeature('home', reducers),
    ],
  declarations: [ HomeComponent ]
})
export class HomeModule {}
