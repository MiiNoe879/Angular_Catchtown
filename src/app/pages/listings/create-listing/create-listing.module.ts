import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {routing} from './create-listing-routing.module';
import {ImportListingComponent} from './import-listing/import-listing.component';
import {ApplyFilterComponent} from './post-listing/apply-filter/apply-filter.component';
import {CoverPhotoComponent} from './post-listing/cover-photo/cover-photo.component';
import {SetDetailsComponent} from './post-listing/set-details/set-details.component';
import {ListPostComponent} from './post-listing/list-post/list-post.component';
import {PostListingComponent} from './post-listing/post-listing.component';
import {DropzoneModule} from 'ngx-dropzone-wrapper';
import {AngularMaterialModule} from '../../../components/angular-material/angular-material.module';
import { CreateListingComponent } from './create-listing.component';
import {TopListingsComponent} from './import-listing/top-listings/top-listings.component';
import { ImportErrorComponent } from './import-listing/import-error/import-error.component';
import { ImportProgressComponent } from './import-listing/import-progress/import-progress.component';
import { PostListedComponent } from './post-listing/post-listed/post-listed.component';
import { ConnectPostComponent } from './post-listing/connect-post/connect-post.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ResponsiveModule} from 'ng2-responsive';
import {CategorySelectorComponent} from './post-listing/category-selector/category-selector.component';
import { SetDescriptionComponent } from './post-listing/set-description/set-description.component';
import {HttpClientModule} from '@angular/common/http';
import {AuthService} from '../../../core/auth/auth.service';
import {PostListingService} from '../../../core/listings/post-listing.service';
import {TokenInterceptor} from '../../../core/auth/auth.interceptor';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {UrlInterceptor} from "../../../core/global/url.interceptor";

@NgModule({
  imports: [
    CommonModule,
    DropzoneModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    ResponsiveModule,
    HttpClientModule,
    routing
  ],
  declarations: [
    ImportListingComponent,
    ApplyFilterComponent,
    CoverPhotoComponent,
    SetDetailsComponent,
    ListPostComponent,
    PostListingComponent,
    CreateListingComponent,
    TopListingsComponent,
    ImportErrorComponent,
    ImportProgressComponent,
    PostListedComponent,
    ConnectPostComponent,
    CategorySelectorComponent,
    SetDescriptionComponent
  ],
  providers: [
    PostListingService,
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ]
})
export class CreateListingModule { }
