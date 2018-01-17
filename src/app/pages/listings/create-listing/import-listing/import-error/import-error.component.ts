import {Component, Input, OnInit} from '@angular/core';
import {DeviceService} from '../../../../../core/device.service';

@Component({
  selector: 'app-import-error',
  templateUrl: './import-error.component.html',
  styleUrls: ['./import-error.component.scss']
})
export class ImportErrorComponent implements OnInit {

  isMobile;

  constructor(private device: DeviceService) { }

  ngOnInit() {
    this.isMobile = this.device.isMobile();
  }

}
