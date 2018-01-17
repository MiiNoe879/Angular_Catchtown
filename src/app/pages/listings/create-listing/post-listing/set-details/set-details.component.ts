import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {DropzoneConfigInterface} from 'ngx-dropzone-wrapper';
import {environment} from '../../../../../../environments/environment';
import {MatStepper} from '@angular/material';
import {NgForm} from '@angular/forms';
import {DeviceService} from '../../../../../core/device.service';
import {PostListingService} from '../../../../../core/listings/post-listing.service';

@Component({
  selector: 'app-set-details',
  templateUrl: './set-details.component.html',
  styleUrls: ['./set-details.component.scss']
})
export class SetDetailsComponent implements OnInit {

  @Input('stepper') stepper: MatStepper;
  @ViewChild('detailsForm') form: NgForm;

  @Output()
  stepProgress = new EventEmitter<number>();

  makeOffer = false;
  lowestPriceModal = false;
  lowestPrice;

  images = ['assets/images/sample-product.png', 'assets/images/sample-product.png', '', ''];
  dzConfig: DropzoneConfigInterface = environment.config;

  isMobile;

  constructor(private device: DeviceService, private post: PostListingService) { }

  nextStep() {
    if (this.form.valid) {
      const obj = this.form.value;
      if (this.lowestPriceModal) {
       obj['lowestPrice'] = this.lowestPrice;
      }
      this.post.processDetailsForm(obj);
      this.stepper.next();
      this.stepProgress.emit(100);
    }
  }

  previousStep() {
    this.stepper.previous();
    this.stepProgress.emit(50);
  }


  ngOnInit() {
    this.isMobile = this.device.isMobile();
    console.log(this.form);
    this.form.value.offer = false;

    if (this.isMobile) {
      this.images.pop();
    }
  }

  openModal() {
    this.lowestPriceModal = this.makeOffer;
  }
}
