import {ModuleWithProviders} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LandingComponent} from './pages/landing/landing.component';

const routes: Routes = [
  {
    path: 'listings',
    loadChildren: 'app/pages/listings/listings.module#ListingsModule'
  },
  {
    path: 'auth',
    loadChildren: 'app/pages/auth/auth.module#AuthModule'
  },
  {
    path: 'messenger',
    loadChildren: 'app/pages/messenger/messenger.module#MessengerModule'
  },
  {
    path: '',
    component: LandingComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
