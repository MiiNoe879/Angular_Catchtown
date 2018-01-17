import { Component, OnInit } from '@angular/core';
import {DeviceService} from '../../../../core/device.service';

@Component({
  selector: 'app-details-image-and-map',
  templateUrl: './details-image-and-map.component.html',
  styleUrls: ['./details-image-and-map.component.scss']
})
export class DetailsImageAndMapComponent implements OnInit {
  isMobile;

  constructor(private device: DeviceService) { }

  ngOnInit() {
    this.isMobile = this.device.isMobile();
  }

}
