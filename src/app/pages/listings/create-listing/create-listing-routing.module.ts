import {ModuleWithProviders} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ImportListingComponent} from './import-listing/import-listing.component';
import {PostListingComponent} from './post-listing/post-listing.component';
import {CreateListingComponent} from './create-listing.component';
import {ConnectPostComponent} from './post-listing/connect-post/connect-post.component';
import {PostListedComponent} from './post-listing/post-listed/post-listed.component';

export const routes: Routes = [
  {
    path: '',
    component: CreateListingComponent,
    children: [
      {
        path: '',
        redirectTo: 'import',
        pathMatch: 'full'
      },
      {
        path: 'import',
        component: ImportListingComponent
      },
      {
        path: 'post/listed',
        component: PostListedComponent
      },
      {
        path: 'post/connect',
        component: ConnectPostComponent
      },
      {
        path: 'post',
        component: PostListingComponent
      }
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
