import { Component, OnInit } from '@angular/core';
import {DeviceService} from '../../../../core/device.service';

@Component({
  selector: 'app-details-reviews',
  templateUrl: './details-reviews.component.html',
  styleUrls: ['./details-reviews.component.scss']
})
export class DetailsReviewsComponent implements OnInit {
  isMobile;

  constructor(private device: DeviceService) { }

  ngOnInit() {
    this.isMobile = this.device.isMobile();
  }

}
