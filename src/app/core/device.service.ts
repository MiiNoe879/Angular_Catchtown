import { Injectable } from '@angular/core';
import {Ng2DeviceService} from 'ng2-device-detector';

@Injectable()
export class DeviceService {

  constructor(private deviceService: Ng2DeviceService) { }

  isMobile() {
    return Boolean(this.deviceService.isMobile() || (this.deviceService.isTablet() && (<any>window).innerWidth < (<any>window).innerHeight));
  }

  isTablet() {
    return Boolean(this.deviceService.isTablet() && (<any>window).innerWidth > (<any>window).innerHeight);
  }

}
