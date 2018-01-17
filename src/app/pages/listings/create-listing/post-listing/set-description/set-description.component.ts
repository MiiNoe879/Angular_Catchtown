import { Component, OnInit } from '@angular/core';
import {PostListingService} from '../../../../../core/listings/post-listing.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-set-description',
  templateUrl: './set-description.component.html',
  styleUrls: ['./set-description.component.scss']
})
export class SetDescriptionComponent implements OnInit {

  description;

  constructor(private post: PostListingService, private router: Router) { }

  ngOnInit() {
  }

  done() {
    this.post.processDescription(this.description);
    this.post.submitPost();
  }

}
