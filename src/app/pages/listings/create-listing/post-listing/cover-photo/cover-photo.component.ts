import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DropzoneConfigInterface} from 'ngx-dropzone-wrapper';
import {environment} from '../../../../../../environments/environment';
import {MatStepper} from '@angular/material';
import {DeviceService} from '../../../../../core/device.service';
import {PostListingService} from '../../../../../core/listings/post-listing.service';

@Component({
  selector: 'app-cover-photo',
  templateUrl: './cover-photo.component.html',
  styleUrls: ['./cover-photo.component.scss']
})
export class CoverPhotoComponent implements OnInit {
  @Input('stepper') stepper: MatStepper;

  @Output()
  stepProgress = new EventEmitter<number>();

  dzConfig: DropzoneConfigInterface = environment.config;

  isMobile;

  constructor(private device: DeviceService, private listing: PostListingService) { }

  ngOnInit() {
    this.isMobile = this.device.isMobile();
  }

  nextStep() {
    this.stepper.next();
    this.stepProgress.emit(50);
  }

  success(event) {
    console.log(event);
    this.listing.listing.temp_cover = event[1].response.results[0].uuid;
    this.nextStep();
  }

  onError(event) {
    console.log(event);
  }

}
