import { Component, OnInit } from '@angular/core';
import {DeviceService} from '../../../core/device.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  emailSent = false;
  isMobile;

  constructor(private device: DeviceService) { }

  ngOnInit() {
    this.isMobile = this.device.isMobile();
  }

}
