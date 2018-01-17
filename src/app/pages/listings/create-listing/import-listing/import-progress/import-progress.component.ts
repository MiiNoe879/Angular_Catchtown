import {Component, Input, OnInit} from '@angular/core';
import {DeviceService} from '../../../../../core/device.service';

@Component({
  selector: 'app-import-progress',
  templateUrl: './import-progress.component.html',
  styleUrls: ['./import-progress.component.scss']
})
export class ImportProgressComponent implements OnInit {

  @Input('value') value: number;
  isMobile;

  constructor(private device: DeviceService) { }

  ngOnInit() {
    this.isMobile = this.device.isMobile();
  }

}
