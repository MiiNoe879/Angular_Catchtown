import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-listings',
  templateUrl: './top-listings.component.html',
  styleUrls: ['./top-listings.component.scss']
})
export class TopListingsComponent implements OnInit {

  number = [1, 2, 3, 4, 5, 6, 7, 8];

  constructor() { }

  ngOnInit() {
  }

}
