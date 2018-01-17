import { Component, OnInit } from '@angular/core';
import {DeviceService} from '../../../../core/device.service';

@Component({
  selector: 'app-similar-listings',
  templateUrl: './similar-listings.component.html',
  styleUrls: ['./similar-listings.component.scss']
})
export class SimilarListingsComponent implements OnInit {
  aLongStr = 'Apple Macbook Pro 15" (Late 2013) i7 2.3 GHz, 16GB Ram, 256 GB';

  isMobile;

  constructor(private device: DeviceService) { }

  ngOnInit() {
    this.isMobile = this.device.isMobile();
  }

}
