import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AppComponent } from './containers/app';
import { NotFoundPageComponent } from './containers/not-found-page';
import { ToolbarComponent } from './components/toolbar.component';
import { SidenavComponent } from './components/sidenav.component';
import { NavItemComponent } from './components/nav-item.component';
import { LayoutComponent } from './components/layout.component';
import { MaterialModule } from '../material';

export const COMPONENTS = [
  AppComponent,
  NotFoundPageComponent,
  ToolbarComponent,
  SidenavComponent,
  NavItemComponent,
  LayoutComponent,
];

@NgModule({
  imports: [CommonModule, RouterModule, MaterialModule],
  declarations: COMPONENTS,
  exports: COMPONENTS,
})
export class CoreModule {
  static forRoot() {
    return {
      ngModule: CoreModule,
      providers: [],
    };
  }
}
