import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'messenger-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  people = [
    {
      imageUrl: 'assets/images/stacy.png',
      name: 'Stasy',
      isActive: true
    },
    {
      imageUrl: 'assets/images/stacy.png',
      name: 'Stasy',
      isActive: false
    },
    {
      imageUrl: 'assets/images/stacy.png',
      name: 'Stasy',
      isActive: false
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
