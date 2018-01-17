import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AuthService} from '../auth/auth.service';
import {environment} from "../../../environments/environment";

@Injectable()
export class PostListingService {

  listing = <Listing>{};

  constructor(private auth: AuthService, private http: HttpClient) { }

  processDetailsForm(form) {
    this.listing.title = form.title;
    this.listing.price = form.price;
    this.listing.make_offer = form.offer;
    this.listing.lowest_price = form.lowest;
    this.listing.zip_code = form.location;
  }

  processCategory(uuid) {
    this.listing.category = uuid;
  }

  processDescription(description) {
    this.listing.description = description;
  }

  submitPost() {
    const body = new FormData();
    body.append('title', this.listing.title);
    body.append('description', this.listing.description);
    body.append('category', this.listing.category);
    body.append('price', String(this.listing.price));
    body.append('make_offer', String(this.listing.make_offer));
    body.append('lowest_price', String(this.listing.lowest_price));
    body.append('zip_code', String(this.listing.zip_code));

    this.http.post(`${environment.baseEndpoint}api/listing/create-nocover/`, body)
      .subscribe(next => {
        console.log(next);
      });
  }

}

interface Listing {
  title: string;
  description: string;
  category: string;
  price: number;
  make_offer: boolean;
  lowest_price: number;
  zip_code: string;
  temp_cover: string;
}
