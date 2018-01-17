import { Component, OnInit } from '@angular/core';
import {DeviceService} from '../../core/device.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  isMobile;

  constructor(private device: DeviceService) { }

  ngOnInit() {
    this.isMobile = this.device.isMobile();
  }

  appContainerMaxWidth() {
    if (this.device.isTablet()) {
      return '60vw';
    } else {
      return 'auto';
    }
  }

}
