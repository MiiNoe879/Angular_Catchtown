import { Component, OnInit } from '@angular/core';
import {MatStepper} from '@angular/material';
import {DeviceService} from '../../../../core/device.service';

@Component({
  selector: 'app-post-listing',
  templateUrl: './post-listing.component.html',
  styleUrls: ['./post-listing.component.scss']
})
export class PostListingComponent implements OnInit {

  progressValue = 25;
  isMobile;

  constructor(private device: DeviceService) { }

  ngOnInit() {
    this.isMobile = this.device.isMobile();
  }

  nextStep(progress: number) {
    this.progressValue = progress;
  }

}
