import { Routes } from '@angular/router';
import { AuthGuard } from './auth/services/auth-guard.service';
import { NotFoundPageComponent } from './core/containers/not-found-page';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: './home/home.module#HomeModule',
    canActivate: [AuthGuard],
  },
  {
    path: 'accounts',
    loadChildren: './accounts/accounts.module#AccountModule'
  },
  { path: '**', component: NotFoundPageComponent },
];
