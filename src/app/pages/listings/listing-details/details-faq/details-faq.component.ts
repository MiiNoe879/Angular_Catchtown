import { Component, OnInit } from '@angular/core';
import {DeviceService} from '../../../../core/device.service';

@Component({
  selector: 'app-details-faq',
  templateUrl: './details-faq.component.html',
  styleUrls: ['./details-faq.component.scss']
})
export class DetailsFaqComponent implements OnInit {

  isMobile;

  constructor(private device: DeviceService) { }

  ngOnInit() {
    this.isMobile = this.device.isMobile();
  }

}
