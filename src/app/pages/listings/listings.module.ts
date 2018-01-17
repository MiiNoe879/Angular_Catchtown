import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {routing} from './listings-routing.module';
import {CreateListingModule} from './create-listing/create-listing.module';
import {ListingDetailsComponent} from './listing-details/listing-details.component';
import {DetailsHeaderComponent} from './listing-details/details-header/details-header.component';
import {DetailsFaqComponent} from './listing-details/details-faq/details-faq.component';
import {DetailsReviewsComponent} from './listing-details/details-reviews/details-reviews.component';
import {SimilarListingsComponent} from './listing-details/similar-listings/similar-listings.component';
import {StarRatingModule} from 'angular-star-rating';
import {TruncatePipe} from '../../pipes-and-validators/truncate.pipe';
import { DetailsImageAndMapComponent } from './listing-details/details-image-and-map/details-image-and-map.component';

import { AgmCoreModule } from '@agm/core';
import {AuthService} from '../../core/auth/auth.service';
import {UserService} from '../../core/auth/user.service';

@NgModule({
  imports: [
    CommonModule,
    CreateListingModule,
    StarRatingModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCpd-3fZAndtemPV3iJ72n7gLDNr0nbkOU'
    }),
    routing
  ],
  declarations: [
    ListingDetailsComponent,
    DetailsHeaderComponent,
    DetailsFaqComponent,
    DetailsReviewsComponent,
    SimilarListingsComponent,
    DetailsImageAndMapComponent,

    TruncatePipe
  ],
  entryComponents: [],
  providers: [
    AuthService,
    UserService
  ]
})
export class ListingsModule { }
