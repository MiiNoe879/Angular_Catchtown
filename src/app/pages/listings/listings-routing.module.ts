import {ModuleWithProviders} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListingDetailsComponent} from './listing-details/listing-details.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'details',
        component: ListingDetailsComponent
      }
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
